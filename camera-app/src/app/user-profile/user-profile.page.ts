import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { UserProfile } from '../interfaces/interface';
import { ModalComponent } from '../components/modal/modal.component';
import { ModalController, MenuController, AlertController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  userdata: UserProfile[];

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private modal: ModalController, private menu: MenuController, public alertController: AlertController , public actionSheetController: ActionSheetController) {
    const id = localStorage.getItem('userid');
    if (id != null)
   {
    console.log('m', id);



    const database = firebase.firestore();
    const data = database.collection('userRegDetails').doc(id);
    try{
      data.onSnapshot((doc) => {
        const myarr = [];
        const h = {
          id: doc.id,
          Name: doc.data().Name,
          Contact: doc.data().Contact,
          Email: doc.data().Email,
          DateofBirth: doc.data().DateofBirth
        };
        console.log('user profile', h);
        myarr.push(h);
        this.userdata = myarr;
        console.log(this.userdata);
    });

    }catch (e)
    {
      console.log('error');
    }





   }
   else{
     this.router.navigate(['/login']);
   }
  }

  ngOnInit() {
  }

  async openModal()
  {
    // console.log('XXX');
    const mymodal = await this.modal.create({
      component: ModalComponent ,
      cssClass: '',
      componentProps: {
      },
    });

    mymodal.present();
  }

  userprof()
  {
    this.menu.enable(true, '6');
    this.menu.open('6');
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
  showImage()
  {
    this.router.navigate(['/show-images']);
  }

  logout()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
