import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {promise } from 'protractor';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth,private db : AngularFirestore) { }

  login(email:string, password:string){

  return new Promise((resolve, rejected) =>{
  this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
 

  }); 

  

  }


   register(email : string, password : string, name : string, edad: number){

    return new Promise ((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then( res =>{
          // console.log(res.user.uid);
        const uid = res.user.uid;
          this.db.collection('users').doc(uid).set({
            name : name,
            uid : uid,
            edad : edad
          })
        
        resolve(res)
      }).catch( err => reject(err))
    })
    

  }

}




  

  