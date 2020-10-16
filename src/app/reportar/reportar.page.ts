import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FirestoreService } from "../servicios/firestore.service";
import { LoadingController, AlertController } from '@ionic/angular';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';



@Component({
  selector: 'app-reportar',
  templateUrl: './reportar.page.html',
  styleUrls: ['./reportar.page.scss'],
})
export class ReportarPage implements OnInit {






public createReportForm: FormGroup;

public date = new Date();





  constructor(public loadingCtrl: LoadingController,
  public alertCtrl: AlertController,
  public firestoreservice: FirestoreService,
  formBuilder: FormBuilder,private router : Router,

   ) { 

     


  	this.createReportForm = formBuilder.group({
  	Categoria: ['', Validators.required],
  	Estacion: ['', Validators.required],
  	Usuario: ['', Validators.required],
  	Fecha: [this.date, Validators.required],
  	DetallesIncidente: ['', Validators.required],

  	});


  }



  async createReport(){

  const loading = await this.loadingCtrl.create();

  const Categoria = this.createReportForm.value.Categoria;
  const Estacion = this.createReportForm.value.Estacion;
  const Usuario = this.createReportForm.value.Usuario;
  const Fecha = this.createReportForm.value.Fecha;
  const DetallesIncidente = this.createReportForm.value.DetallesIncidente;

  this.firestoreservice.
  createReport(Categoria, Estacion, Usuario, Fecha, DetallesIncidente).then(() =>{
  loading.dismiss().then(() => {
  this.router.navigateByUrl[('/estado-metro')];
  });
  },
  error => {
  console.error(error);
  }
  );

  return await loading.present();
  }





  ngOnInit() {
  }

}
