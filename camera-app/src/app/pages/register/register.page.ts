import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController, ToastController } from '@ionic/angular';
import { Register } from 'src/app/interfaces/interface';
import firebase from 'firebase';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: string;
  contact: string;
  dateofbirth: string;
  email: string;
  password: string;

  // tslint:disable-next-line: max-line-length
  constructor(private menu: MenuController , public toastController: ToastController, public loadingController: LoadingController, private myservice: ServiceService , private router: Router) { }

  ngOnInit() {
  }

  registerMenu()
  {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  // register
  Register()
  {
    if ( this.email.length < 11)
    {
      alert('Enter Valid Email');
    }
    else if (this.password.length < 6)
    {
      alert('Password must be greater than Six Digits ');
    }
    else
    {
      const userDetails: Register = {
        name: this.name,
        email: this.email,
        contact: this.contact,
        password: this.password,
        dateofbirth: this.dateofbirth
      };

      firebase.auth().createUserWithEmailAndPassword(userDetails.email, userDetails.password).then((message) => {
          console.log(message);
          try{
          const save = this.myservice.saveUserDetails(userDetails);
          console.log(save);
          this.presentLoading();
              }
          catch (e)
          {
            console.log(e);
          }
      }).catch((e) => {
        alert( e);
      });
    }

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.router.navigate(['/login']);
    this.presentToast();

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

}
