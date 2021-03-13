import { Component, OnInit } from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import firebase from 'firebase';;
import { Imagesave } from 'src/app/interfaces/interface';
import { ServiceService } from 'src/app/services/service.service';
import { MenuController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import {Crop} from '@ionic-native/crop/ngx';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  imagestr: string;
  cardopen = false;
  takephoto = '';
  pictureurl: string;
  userid: string;

  // tslint:disable-next-line: max-line-length
  constructor( private camera: Camera, private crop: Crop, private datePipe: DatePipe,
               private service: ServiceService, public alertController: AlertController,
               public loadingController: LoadingController, private menu: MenuController, private router: Router) {
   const id = localStorage.getItem('userid');
   if (id != null)
   {
    console.log('m', id);
    this.userid = id;
   }
   else{
     this.router.navigate(['/login']);
   }

   }

  ngOnInit() {
  }

// taking the pictures and saving it into base 64 string format

takePicture()
{

  const options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit: true,
    sourceType: 1,
    saveToPhotoAlbum: false,
};
  this.camera.getPicture(options).then((imageData) => {
    this.cardopen = !this.cardopen;
    this.takephoto = 'data:image/jpeg;base64,' + imageData;
    console.log(this.takephoto);
    }, (err) => {
      console.log(err);
    });
}

// it will work when user choose upload from gallery
getImage()
{
  const options: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    saveToPhotoAlbum: false,
    allowEdit: true
  };
  console.log(JSON.stringify(options));
  this.camera.getPicture(options).then((imageData) => {
    this.cardopen = !this.cardopen;
    this.takephoto = 'data:image/jpeg;base64,' + imageData;
    console.log('Gallery', this.takephoto);
    }, (err) => {
    });
}

// loading


async presentLoading() {

  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Please wait...',
    duration: 2000
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed!');
  this.takePicture();
}

// loading2

async presentLoadingz() {

  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Please wait...',
    duration: 1000
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed!');
  this.getImage();
}


// After getting link, by calling this method the base 64 link will be send to service

  async uploadImageCloud()
{
  const loading =  this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Please wait...',
    duration: 5000
  });
  (await loading).present();
  // tslint:disable-next-line: prefer-const
  let date = new Date();
  const uploaddate = this.datePipe.transform(date, 'yyyy-MM-dd');
  console.log(uploaddate);


  const today1 = new Date();
  const date1 = today1.getFullYear() + '-' + (today1.getMonth() + 1) + '-' + today1.getDate();
  const time1 = today1.getHours() + ':' + today1.getMinutes() + ':' + today1.getSeconds() + ':' + today1.getMilliseconds();
  const dateTime1 = date1 + 'and' + time1; // -------
  const mergedatewithuserid = this.userid + dateTime1;

  const messageurl = this.takephoto;
  // const a = messageurl.
  const storageref = firebase.storage().ref();
  storageref.child('images' + '/' + this.userid + dateTime1).putString(messageurl , 'data_url').then(async (snapshot) => {
  console.log('success');
  const downloadurl = await snapshot.ref.getDownloadURL();
  this.imagestr = downloadurl;
  // const a = storageref.getDownloadURL();
  console.log('Download Url', downloadurl);
  }).then(async () => { 

    const  savedetails: Imagesave = {
      userid: this.userid,
      imageurl: this.imagestr,
      date: uploaddate,
      storagedel: mergedatewithuserid
    };
    const a = await this.service.saveImage(savedetails);
    console.log('Mercy', a);
    this.presentAlert();
    this.cardopen = !this.cardopen;


  }).catch(() => {
    console.log('bye');
  });



}




// loading 3

//  async presentLoading1() {


//   const { role, data } = await (await loading).onDidDismiss();
//   console.log('Loading dismissed!');
//   this.presentAlert();
//   this.cardopen = !this.cardopen;

// }

// alert


async presentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    // header: 'Alert',
    // subHeader: 'Subtitle',
    message: 'Successfully Added',
    buttons: ['OK']
  });

  await alert.present();
  this.takephoto = '';
}

// show image


showImage()
{
  this.router.navigate(['/show-images']);
}

// menu

search()
{
  this.router.navigate(['/search-date']);
}

gallery()
{
  this.router.navigate(['/show-images']);

}

dashboardMenu()
  {
    this.menu.enable(true, '2');
    this.menu.open('2');
  }

  // alert with choice

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

  // logout and clearing localstorage

  logout()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}















