import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {
	public email:string = "";
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  sendLinkReset(){
  if(this.email !=""){

   this.authService.resetPassword(this.email).then(() =>{
  console.log('enviado');
  alert('Se han enviado las instrucciones a su correo');
  }).catch(() =>{
  console.log('error');
  })
  } else {
  alert('No hay ningún correo');
  }

  }
 

}
