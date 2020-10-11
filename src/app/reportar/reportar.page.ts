import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FirestoreService } from "../servicios/firestore.service";
import { LoadingController, AlertController } from '@ionic/angular';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-reportar',
  templateUrl: './reportar.page.html',
  styleUrls: ['./reportar.page.scss'],
})
export class ReportarPage implements OnInit {

public createReportForm: FormGroup;

  constructor(public loadingCtrl: LoadingController,
  public alertCtrl: AlertController,
  public firestoreservice: FirestoreService,
  formBuilder: FormBuilder,
   ) { 

  	this.createReportForm = formBuilder.group({
  	Categoria: ['', Validators.required],
  	Estacion: ['', Validators.required],
  	Usuario: ['', Validators.required],
  	Fecha: ['', Validators.required],
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
  console.log("hola");
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
