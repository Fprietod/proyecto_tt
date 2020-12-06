import { Component, OnInit } from '@angular/core';
import { FirestoreService } from "../servicios/firestore.service";
import { reporte } from '../models/reporte';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DetallesPage } from "../detalles/detalles.page";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';

export interface MyData {
  name: string;
  filepath: string;
  size: number;
}




@Component({
  selector: 'app-detalles-sin-registro',
  templateUrl: './detalles-sin-registro.page.html',
  styleUrls: ['./detalles-sin-registro.page.scss'],
})
export class DetallesSinRegistroPage implements OnInit {

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

	public reporte: Observable<reporte>;
	public reportId: string = this.route.snapshot.paramMap.get('id');
	public incidente_falso : number = 0;
	public contador: number = 0;
	public incidente_verdadero: number = 0;
	public contador_verdadero: number = 0;
	public respuesta : string

  
  constructor(private firestoreService: FirestoreService, private route: ActivatedRoute, alertController: AlertController, private router : Router,private storage: AngularFireStorage, private database: AngularFirestore) {
  this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>('reporte_foto');
    this.images = this.imageCollection.valueChanges(); }

  ngOnInit() {
  const reportId: string = this.route.snapshot.paramMap.get('id');
  this.reporte = this.firestoreService.getReportDetail(reportId).valueChanges();
 
  
  }
   confirma(){
   this.contador_verdadero = this.incidente_verdadero
   this.contador_verdadero = this.contador_verdadero+=1;
   this.incidente_verdadero = this.contador_verdadero;
   if(this.incidente_verdadero >= 3){
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


   uploadFile(event: FileList) {
    

    // The File object
    const file = event.item(0)

    // Validation for Images Only
    if (file.type.split('/')[0] !== 'image') { 
     console.error('unsupported file type :( ')
     return;
    }

    this.isUploading = true;
    this.isUploaded = false;


    this.fileName = file.name;

    // The storage path
    const path = `reporte_foto/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'Freaky Image Upload Demo' };

    //File reference
    const fileRef = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Get file progress percentage
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      
      finalize(() => {
        // Get uploaded file storage path
        this.UploadedFileURL = fileRef.getDownloadURL();
       
        
        this.UploadedFileURL.subscribe(resp=>{
          this.addImagetoDB({
            name: file.name,
            filepath: resp,
            size: this.fileSize
          });
          this.isUploading = false;
          this.isUploaded = true;
        },error=>{
          console.error(error);
        })
      }),
      tap(snap => {
          this.fileSize = snap.totalBytes;
      })
    )
  }

  addImagetoDB(image: MyData) {
    //Create an ID for document
    const id = this.database.createId();

    //Set document id with value in database
    this.imageCollection.doc(id).set(image).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log("error " + error);
    });
  }


}
