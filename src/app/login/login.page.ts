import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  

	name : string;
	photo : string;
  carro : string;


  constructor(private authservice : AuthService,
  private firestore: AngularFirestore) { }

  async ngOnInit() {
  this.authservice.getUserAuth().subscribe(user => {
  this.name = user.displayName;
  this.photo = user.photoURL;


  })
  }




 Onlogout(){
    this.authservice.logout();
  }




}
