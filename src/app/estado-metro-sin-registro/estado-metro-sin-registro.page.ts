import { Component, OnInit } from '@angular/core';
import { FirestoreService } from "../servicios/firestore.service";
import { reporte } from '../models/reporte';
import { Observable } from 'rxjs';
import 'firebase/firestore';

@Component({
  selector: 'app-estado-metro-sin-registro',
  templateUrl: './estado-metro-sin-registro.page.html',
  styleUrls: ['./estado-metro-sin-registro.page.scss'],
})
export class EstadoMetroSinRegistroPage implements OnInit {

	public reporte;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
  this.reporte = this.firestoreService.getReportList().valueChanges();
  }

}
