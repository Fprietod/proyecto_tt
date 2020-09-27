import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authservice : AuthService) { }

  ngOnInit() {
  }

 Onlogout(){
    this.authservice.logout();
  }
    

}
