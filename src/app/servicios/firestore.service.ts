import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import 'firebase/firestore';
import { reporte } from  "../models/reporte";
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

export interface MyData {
  name: string;
  filepath: string;
  size: number;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  // Upload Task
  task: AngularFireUploadTask;

  // Progress in percentage
  percentage: Observable<number>;

  // Snapshot of uploading file
  snapshot: Observable<any>;

  // Uploaded File URL
  UploadedFileURL: Observable<string>;

  //Uploaded Image List
  images: Observable<MyData[]>;

  //File details
  fileName:string;
  fileSize:number;

  //Status check
  isUploading:boolean;
  isUploaded:boolean;
   private imageCollection: AngularFirestoreCollection<MyData>;

  constructor(public firestore: AngularFirestore) {


  }

  createReport(

  Categoria: string,
  Estacion: string,
  Usuario: string,
  Fecha: string,
    DetallesIncidente: string,
    Sugerencia: string,
): Promise<void> {
	const id = this.firestore.createId();

	return this.firestore.doc(`reporte/${id}`).set({
	id,
	Categoria,
	Estacion,
	Usuario,
	Fecha,
	DetallesIncidente,
  Sugerencia,

	});
}


	getReportList(): AngularFirestoreCollection<reporte>{
	return this.firestore.collection('reporte');
	}


	getReportDetail(reportId: string): AngularFirestoreDocument<reporte> {
	return this.firestore.collection('reporte').doc(reportId);
	}

	deleteReport(reportId: string): Promise<void>{
	return this.firestore.doc(`reporte/${reportId}`).delete();
	}











}
