import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { UserProfile } from 'src/app/interfaces/interface';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
    id: string;
    DateofBirth: string;
    Name: string;
    Contact: string;
    Email: string;
    theid: string;

  userdata: UserProfile[];

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private modal: ModalController, private service: ServiceService, public toastController: ToastController) {

    const id = localStorage.getItem('userid');
    this.theid = id;
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

    ngOnInit() {}


    ionViewDidEnter()
  {
    console.log('levelr', this.userdata[0].id);
    this.Name = this.userdata[0].Name;
    this.Email = this.userdata[0].Email;
    this.Contact = this.userdata[0].Contact;
    this.DateofBirth = this.userdata[0].DateofBirth;

  }

  modalMenu()
  {
    this.modal.dismiss();
  }

  Update()
  {
    const update: UserProfile = {
      Name: this.Name,
      Contact: this.Contact,
      DateofBirth: this.DateofBirth,
      id: this.theid,
      Email: this.Email
    };

    const a = this.service.updateUserData(update).then(() => {
      console.log(a);
      this.modal.dismiss();
      this.presentToast();
    });

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Updated',
      duration: 2000
    });
    toast.present();
  }

}
