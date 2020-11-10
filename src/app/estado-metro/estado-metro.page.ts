import { Component, OnInit } from '@angular/core';
import { FirestoreService } from "../servicios/firestore.service";
import { reporte } from '../models/reporte';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-estado-metro',
  templateUrl: './estado-metro.page.html',
  styleUrls: ['./estado-metro.page.scss'],
})
export class EstadoMetroPage implements OnInit {

public reporte;

  constructor(private firestoreService: FirestoreService ) { }

  ngOnInit() {
  this.reporte = this.firestoreService.getReportList().valueChanges();
  }

}
