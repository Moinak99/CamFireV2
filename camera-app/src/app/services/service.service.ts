import { Injectable } from '@angular/core';
import {Register, Login, Imagesave, Search, UserProfile} from 'src/app/interfaces/interface';
import firebase from 'firebase';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }


  // save the user deting after registration

  saveUserDetails(details: Register)
  {
    // tslint:disable-next-line: no-shadowed-variable
    const promise = new Promise<string> ((userDetail) => {
      const database = firebase.firestore();
      const data = database.collection('userRegDetails');
      try
      {
        data.add({Name: details.name , Contact: details.contact , DateofBirth: details.dateofbirth , Email: details.email}).then(() => {
          const a = 'success';
          userDetail(a);
        });
      }
      catch (e)
      {
        userDetail(e);
      }
    });
    return promise;
  }

  // get user id to store in localstorage

  getuserid(details: Login): Promise<any>{
    // tslint:disable-next-line: no-shadowed-variable
    const promise = new Promise<any>( async (objDataSuccess, reject) => {
      console.log('hello');
      const database = firebase.firestore();
      const myarr = [];
      try{
          const data = await database.collection('userRegDetails').where('Email', '==', details.email).get();
          data.forEach(element => {
            console.log('User Id', element.id);
            objDataSuccess( element.id);
          });
          }
      catch (e)
      {
        reject(e);
      }
    });
    return promise;
  }


// save images into firebase

  saveImage(details: Imagesave)
  {
    // tslint:disable-next-line: no-shadowed-variable
    const promise = new Promise<string> ((userDetail) => {
      const database = firebase.firestore();
      const data = database.collection('userUploads');
      try
      {
        // tslint:disable-next-line: max-line-length
        data.add({Userid: details.userid , ImageUrl: details.imageurl , uploadDate: details.date , storageid: details.storagedel}).then(() => {
          const a = 'success';
          userDetail(a);
        });
      }
      catch (e)
      {
        userDetail(e);
      }
    });
    return promise;
  }

// delete pic from firebase

  del(id)
        {
          // tslint:disable-next-line: no-shadowed-variable
          const promise = new Promise<string>((delData, reject) => {
            const database = firebase.firestore();
            const data = database.collection('userUploads').doc(id);
            data.delete()
                .then(() => {
                  delData('Deleted');
                })
                .catch((e) => {
                  reject(e);
                });
        });
        }

// search by date

    searchbydate(details: Search): Promise<any>{
      // tslint:disable-next-line: no-shadowed-variable
      const promise = new Promise<any>( async (objDataSuccess, reject) => {
        console.log('hello');
        const database = firebase.firestore();
        const myarr = [];
        try{
            // tslint:disable-next-line: max-line-length
            const data = await database.collection('userUploads').where('Userid', '==', details.userid).where('uploadDate', '==', details.date).get();
            data.forEach(element => {
              console.log('User Id', element.id);
              const h = {
                delid: element.id,
                userid: element.data().Userid,    // object create korchi
                picture: element.data().ImageUrl,
                uploadDate: element.data().uploadDate,
                storageid: element.data().storageid
              };
              myarr.push(h);
             });
            objDataSuccess(myarr);
            }
        catch (e)
        {
          reject(e);
        }
      });
      return promise;
    }

// update user profile

    updateUserData(details: UserProfile)
        {
          // tslint:disable-next-line: no-shadowed-variable
          const promise = new Promise<string> ((userDetail, reject) => {
            const db = firebase.firestore();
            const data = db.collection('userRegDetails').doc(details.id);
            try
            {
                // tslint:disable-next-line: max-line-length
              data.update({Name : details.Name, Contact: details.Contact, DateofBirth: details.DateofBirth}).then(() => {
                const a = 'success';
                userDetail(a);
              });
            }
            catch (e)
            {
              userDetail(e);
            }
          });
          return promise;
        }


        // firebaseStorageUpload(messageurl: any)
        // {
        //   console.log(messageurl);
        //   const storageref = firebase.storage().ref();
        //   storageref.child('images/').putString(messageurl , 'data_url').then(async (snapshot)=>{
        //   console.log('success');
        //   const a = await snapshot.ref.getDownloadURL();
        //   // const a = storageref.getDownloadURL();
        //   console.log('Download Url', a);
        //   }).catch((error) => {
        //     console.log('hoyni');
        //   });

        // }



}
