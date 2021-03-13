import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { Img } from 'src/app/interfaces/interface';
import { ActionSheetController, MenuController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { Base64ToGallery, Base64ToGalleryOptions } from '@ionic-native/base64-to-gallery/ngx';
import { Downloader, DownloadRequest, NotificationVisibility } from '@ionic-native/downloader/ngx';
@Component({
  selector: 'app-show-images',
  templateUrl: './show-images.page.html',
  styleUrls: ['./show-images.page.scss'],
})
export class ShowImagesPage implements OnInit {
  userreq: Img[];

  // tslint:disable-next-line: max-line-length
  constructor(private downloader: Downloader, public loadingController: LoadingController, public actionSheetController: ActionSheetController, private base64ToGallery: Base64ToGallery, public toastController: ToastController, public alertController: AlertController, private router: Router, private service: ServiceService, private menu: MenuController) {
    const userid = localStorage.getItem('userid');
    console.log('zzp', userid);


    const database = firebase.firestore();
    const data = database.collection('userUploads').where('Userid', '==', userid);
    try{
      data.onSnapshot(async (querySnapshot) => {
         const myarr = [];  // empty array create korlam
         querySnapshot.forEach((doc) => {
           console.log(doc.id);

           const h = {
             delid: doc.id,
             userid: doc.data().Userid,    // object create
             picture: doc.data().ImageUrl,
             uploadDate: doc.data().uploadDate,
             storageid: doc.data().storageid
           };
           myarr.push(h);  // array push

          });
         this.userreq = myarr;
         console.log('ArrayofObj', this.userreq);  // print
         if (this.userreq.length === 0 )
    {
      const toast = await this.toastController.create({
        message: 'No Saved Image Found',
        duration: 2000,
        position: 'middle',
      });
      toast.present();    }
        });
    }catch (e)
    {
      console.log('error');
    }
 }

  ngOnInit() {
  }

  logout()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
  }





    async presentActionSheet(delid: string, storageid: string, picture: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          this.presentAlertConfirm(delid, storageid);

        }
      },
       {
         text: 'download',
         icon: 'download',
         handler: () => {
           console.log('download clicked');
           this.download(picture);
         }},
         {
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


  async presentAlertConfirm(delid: string, storageid: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete!',
      message: 'Are you <strong>Sure</strong>?',
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
            this.DeletePicture(delid, storageid);
          }
        }
      ]
    });
    await alert.present();
  }


// delete


  DeletePicture(delid: string, storageid: string)
  {
    console.log('momo', delid);
    const a = this.service.del(delid);
    console.log(a);

    const storageref = firebase.storage().ref();
    const desertRef = storageref.child('images' + '/' + storageid);
    desertRef.delete().then(() =>
    {
      console.log('deleted from storage'); //
    }).catch(() => {
      console.log('Del Failed'); //
    });

}

dashboard()
{
  this.router.navigate(['/dashboard']);
}

search()
{
  this.router.navigate(['/search-date']);

}

showMenu()
  {
    this.menu.enable(true, '3');
    this.menu.open('3');
  }

// saveDevice(picture: string)
// {

//   const base64option: Base64ToGalleryOptions =
//   {
//     prefix: 'img',
//     mediaScanner: true,

//   };

//   // const todecode = atob(picture);
//   // console.log(todecode);


//   this.base64ToGallery.base64ToGallery(picture, base64option).then(
//     res => alert('Saved image to gallery ' + JSON.stringify(res)),
//     err => alert('Error saving image to gallery ' + JSON.stringify(err)),
//   ).catch((e) => {
//     alert(e);
//   });

// }

async presentToasct() {
  const toast = await this.toastController.create({
    message: 'Your settings have been saved.',
    duration: 2000
  });
  toast.present();
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
