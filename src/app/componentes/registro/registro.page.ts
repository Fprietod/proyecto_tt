import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public  email : string;
  public  name : string;
  public password : string;
  public edad : number;
  checkedbtn: boolean;
  

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit() {
  
  }

  OnSubmitRegister(){
  if(this.edad >=18){
    this.auth.register(this.email, this.password,this.name, this.edad).then( auth => {
      this.router.navigate(['home'])
      console.log(auth)
    }).catch(err => console.log(err))
    }
    else
    {
    alert('Solo pueden registrarse usuarios mayores de 18 años')
    }
  }

  loginGoogle(){
  this.auth.loginWithGoogle().then(() => {
  this.router.navigate(['/login']);
  }).catch(err => alert('Los datos son incorrectos o no existe el usuario'+err))
  }

  loginFacebook(){
  this.auth.loginWithFacebook().then(() => {
  this.router.navigate(['/login']);
  }).catch(err => alert('Los datos son incorrectos o no existe el usuario'+err));

  }

}
