import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController, ToastController } from '@ionic/angular';
import { Login } from 'src/app/interfaces/interface';
import firebase from 'firebase';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  // tslint:disable-next-line: max-line-length
  constructor(private menu: MenuController , public toastController: ToastController, private service: ServiceService, private router: Router, public loadingController: LoadingController) { }

  ngOnInit() {
  }

  userLoginMenu()
  {
    this.menu.enable(true, '02');
    this.menu.open('02');
  }

  // login check by firebase authentication and saving userd into localstorage

  userLogin()
  {
    const logincheck: Login = {
      email: this.email,
      password: this.password
    };

    firebase.auth().signInWithEmailAndPassword(logincheck.email, logincheck.password).then((data) => {
      console.log(data);
      this.service.getuserid(logincheck).then((datad) => {
        console.log('userid', datad);
        localStorage.setItem('userid', datad);
        this.router.navigate(['/show-images']);
        this.presentToast();
      });
    }).catch(async () => {
      const toast = await this.toastController.create({
        message: 'Please Check your email or password',
        duration: 2000
      });
      toast.present();
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Logged in', 
      duration: 2000
    });
    toast.present();
  }

  async presentLoading() {


    if ( this.email.length < 11)
    {
      alert('Enter Valid Email');
      return;
    }
    else if (this.password.length < 6)
    {
      alert('Password must be greater than Six Digits ');
      return;
    }
    else
    {
      this.userLogin();

    }



    // if ( this.email.length > 11 || this.password.length > 6)
    // {

    // }
    // else
    // {
    //   alert('Invalid Email or Password');
    //   return ;
    // }
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');


  }

}
