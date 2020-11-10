import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-reporte-iconos',
  templateUrl: './reporte-iconos.page.html',
  styleUrls: ['./reporte-iconos.page.scss'],
})
export class ReporteIconosPage implements OnInit {

	public estaciones: any[];
  public estacionesBackup: any[];
  constructor(private router: Router, private firestore: AngularFirestore ) { }

  async ngOnInit() {
    this.estaciones = await this.initializeItem();

  }

  async initializeItem(): Promise<any> {
    const estaciones = await this.firestore.collection('estaciones')
    .valueChanges().pipe(first()).toPromise();
    this.estacionesBackup = estaciones;
    return estaciones;
  }

  async filterList(evt){
    this.estaciones = this.estacionesBackup;
    const searchTerm = evt.srcElement.value;
    if (!searchTerm){
      return;
    }

    this.estaciones = this.estaciones.filter(currentStation => {
      if(currentStation.name && searchTerm){
        return(currentStation.name.toLowerCase().indexOf(searchTerm.toLowerCase
        ()) > -1  || currentStation.type.toLowerCase().indexOf(searchTerm.toLowerCase
        ()) > -1 );
      }
    });
}



}
