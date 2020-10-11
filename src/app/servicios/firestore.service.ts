import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import 'firebase/firestore';
import { reporte } from  "../models/reporte";


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }

  createReport(

  Categoria: string,
  Estacion: string,
  Usuario: string,
  Fecha: string,
  DetallesIncidente: string
): Promise<void> {
	const id = this.firestore.createId();

	return this.firestore.doc(`reporte/${id}`).set({
	id,
	Categoria,
	Estacion,
	Usuario,
	Fecha,
	DetallesIncidente,
	});
}


	getReportList(): AngularFirestoreCollection<reporte>{
	return this.firestore.collection('reporte');
	}



  
}
