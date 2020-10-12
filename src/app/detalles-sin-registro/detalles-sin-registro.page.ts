import { Component, OnInit } from '@angular/core';
import { FirestoreService } from "../servicios/firestore.service";
import { reporte } from '../models/reporte';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalles-sin-registro',
  templateUrl: './detalles-sin-registro.page.html',
  styleUrls: ['./detalles-sin-registro.page.scss'],
})
export class DetallesSinRegistroPage implements OnInit {

	public reporte: Observable<reporte>;
	public reportId: string = this.route.snapshot.paramMap.get('id');
	public incidente_falso : number = 0;
	public contador: number = 0;
	public incidente_verdadero: number = 0;
	public contador_verdadero: number = 0;
	public respuesta : string

  
  constructor(private firestoreService: FirestoreService, private route: ActivatedRoute, alertController: AlertController, private router : Router) { }

  ngOnInit() {
  const reportId: string = this.route.snapshot.paramMap.get('id');
  this.reporte = this.firestoreService.getReportDetail(reportId).valueChanges();
  
  }
   confirma(){
   this.contador_verdadero = this.incidente_verdadero
   this.contador_verdadero = this.contador_verdadero+=1;
   this.incidente_verdadero = this.contador_verdadero;
   if(this.incidente_verdadero >= 4){
   this.respuesta = "Este reporte es confiable";
   }
   }

   falso2(){
    this.contador=this.incidente_falso;
   this.contador = this.contador+=1;
   this.incidente_falso = this.contador;
 	if(this.incidente_falso == 3){
 	this.firestoreService.deleteReport(this.reportId)
 	}
   }
}
