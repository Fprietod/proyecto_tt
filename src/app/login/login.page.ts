import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	name : string;
	photo : string;

  constructor(private authservice : AuthService) { }

  ngOnInit() {
  this.authservice.getUserAuth().subscribe(user => {
  this.name = user.displayName;
  this.photo = user.photoURL;
  
  })
  }

 Onlogout(){
    this.authservice.logout();
  }
    

}
