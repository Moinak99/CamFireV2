import { Component, OnInit } from '@angular/core';
import { Search, Img } from 'src/app/interfaces/interface';
import { ServiceService } from 'src/app/services/service.service';
import { ActionSheetController, ToastController, MenuController, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { Downloader, DownloadRequest, NotificationVisibility } from '@ionic-native/downloader/ngx';

@Component({
  selector: 'app-search-date',
  templateUrl: './search-date.page.html',
  styleUrls: ['./search-date.page.scss'],
})
export class SearchDatePage implements OnInit {
  userreq: Img[];
  searchdt: string;
  id;

  // tslint:disable-next-line: max-line-length
  constructor(private downloader: Downloader, private service: ServiceService, public loadingController: LoadingController,  private menu: MenuController, private router: Router, public alertController: AlertController , public actionSheetController: ActionSheetController, public toastController: ToastController) {

    const userid = localStorage.getItem('userid');
    console.log('zzp', userid);
    this.id = userid;
   }

  ngOnInit() {
  }


  async presentLoading() {
    console.log(typeof(this.searchdt));
    // tslint:disable-next-line: triple-equals
    if (typeof(this.searchdt) != 'undefined')
     {
      this.search();
     } 

     else{
      alert('Please Select Date');
      return;
    }
    //
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


  // search by id and date

  async search()
  {
    const searchbydt: Search = {
         userid: this.id,
         date: this.searchdt,
    };

    console.log(searchbydt.date);

    const data = await this.service.searchbydate(searchbydt);
    console.log('b', data);
    this.userreq = data ;
    if (this.userreq.length === 0 )
    {
      const toast = await this.toastController.create({
        message: 'No Saved Image Found',
        duration: 2000
      });
      toast.present();    }
  }

  dashboard()
{
  this.router.navigate(['/dashboard']);
}

gallery()
{
  this.router.navigate(['/show-images']);

}


  async presentActionSheet(delid: string, userid: string, uploaddate: string, storageid: string, picture: string)
  {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          this.presentAlertConfirm1(delid, userid, uploaddate, storageid);

        }
      }, {
        text: 'download',
        icon: 'download',
        handler: () => {
          console.log('download clicked');
          this.download(picture);
        }},  {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }



  async presentAlertConfirm1(delid: string, id: string, uploaddate: string, storageid: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete!',
      message: 'Are You Sure to <strong>delete</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.DeletePicture(delid, id , uploaddate , storageid);
          }
        }
      ]
    });

    await alert.present();
  }





// delete picture
  async DeletePicture(delid: string, id: string, uploaddate: string, storageid: string)
  {
    console.log('momo', delid);
    const a = await this.service.del(delid);
    console.log(a);

    const storageref = firebase.storage().ref();
    const desertRef = storageref.child('images' + '/' + storageid);
    desertRef.delete().then(() =>
    {
      console.log('deleted from storage'); //
    }).catch(() => {
      console.log('Del Failed'); //
    }).then(async () => {

      const searchbydt: Search = {
        userid: id,
        date: uploaddate,
   };
      const data = await this.service.searchbydate(searchbydt);
      console.log('nmnmnmm', data);
      this.userreq = data ;
      if (this.userreq.length === 0 )
      {
        const toast = await this.toastController.create({
          message: 'No Saved Image Found',
          duration: 2000
        });
        toast.present();    }
    });






}



searchdatemenu()
{
  this.menu.enable(true, '8');
  this.menu.open('8');
}

async presentAlertConfirm() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Are You Sure!',
    message: 'Confirm <strong>Logout</strong>!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
          this.logout();
        }
      }
    ]
  });

  await alert.present();
}

// log out
logout()
{
  localStorage.clear();
  this.router.navigate(['/login']);
}

download(picture: string)
{
  const request: DownloadRequest = {
    uri: picture,
    title: 'MyDownload',
    description: '',
    mimeType: '',
    visibleInDownloadsUi: true,
    notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
    destinationInExternalFilesDir: {
        dirType: 'Downloads',
        subPath: 'MyFile.apk'
    }
};


  this.downloader.download(request)
        .then((location: string) => {
          alert('Downloaded');
        })
        .catch((error: any) => console.error(error));
}

}
