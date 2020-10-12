import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {promise } from 'protractor';
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { auth } from 'firebase';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { Platform } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth,private db : AngularFirestore,
  private router : Router, private google : GooglePlus,
  private fb : Facebook, public platform: Platform) { }

  login(email:string, password:string){

  return new Promise((resolve, rejected) =>{
  this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
 

  }); 

  

  }


   register(email : string, password : string, name : string, edad: number){

    return new Promise ((resolve, reject) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then( res =>{
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


  logout(){
    this.AFauth.signOut().then(() => {
      this.fb.logout()
      this.google.disconnect();
      this.router.navigate(['/home']);
    })
  }


  loginWithGoogle(){
  if(this.platform.is('cordova')){
  return this.google.login({}).then(result =>{
  const user_data_google = result;
  return this.AFauth.signInWithCredential(auth.GoogleAuthProvider.credential(null, user_data_google.accessToken));
  })
  }else{

  return this.AFauth.signInWithPopup(new auth.GoogleAuthProvider)

  }

  }

  loginWithFacebook(){
  if(this.platform.is('cordova')){
  return this.fb.login(['email','public_profile']).then((response : FacebookLoginResponse) => {
  const credential_fb = auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
  return this.AFauth.signInWithCredential(credential_fb);

  })
  }else{

  return this.AFauth.signInWithPopup(new auth.FacebookAuthProvider)
  }

  }

  getUserAuth(){
  return this.AFauth.authState
  }

}




  

  