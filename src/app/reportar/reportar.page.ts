import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FirestoreService } from "../servicios/firestore.service";
import { LoadingController, AlertController } from '@ionic/angular';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';
import { AuthService } from "../servicios/auth.service";
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-reportar',
  templateUrl: './reportar.page.html',
  styleUrls: ['./reportar.page.scss'],
})
export class ReportarPage implements OnInit {






public createReportForm: FormGroup;


public date = new Date();
	public name : string;
  public estaciones: any[];
  public estacionesBackup: any[];
  public categoria : string;
  public estacion : string;




  constructor(public loadingCtrl: LoadingController,
  public alertCtrl: AlertController,
  public firestoreservice: FirestoreService,
  formBuilder: FormBuilder,private router : Router,
  private authservice : AuthService, private firestore: AngularFirestore,


   ) 

   {




  	this.createReportForm = formBuilder.group({
  	Usuario: [this.name, Validators.required],
  	Fecha: [this.date, Validators.required],
  	DetallesIncidente: ['', Validators.required],
    Sugerencia:['', Validators.required]

  	});


  }



  async createReport(){

  const loading = await this.loadingCtrl.create();

  const Categoria = this.categoria;
  const Estacion = this.estacion;
  const Usuario = this.createReportForm.value.Usuario;
  const Fecha = this.createReportForm.value.Fecha;
  const DetallesIncidente = this.createReportForm.value.DetallesIncidente;
  const Sugerencia = this. createReportForm.value.Sugerencia;

  this.firestoreservice.
  createReport(Categoria, Estacion, Usuario, Fecha, DetallesIncidente, Sugerencia).then(() =>{
  loading.dismiss().then(() => {
  alert('El reporte se ha enviado correctamente')
  this.router.navigateByUrl('/estado-metro')
  });
  },
  error => {
  console.error(error);
  }
  );

  return await loading.present();
  }





     ngOnInit() {
    this.authservice.getUserAuth().subscribe(user => {
    this.name = user.displayName;


    })



  }


  onChange(SelectedValue){ console.log("Selected car", SelectedValue);
  this.categoria = SelectedValue;
   
   } 

   onChange2(SelectedValue2){ console.log("Selected car", SelectedValue2);
  this.estacion = SelectedValue2;
   
   } 

}
