import { Component, OnInit } from '@angular/core';
import { FirestoreService } from "../servicios/firestore.service";
import { reporte } from '../models/reporte';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';


export interface MyData {
  name: string;
  filepath: string;
  size: number;
}




@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

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

  constructor(private firestoreService: FirestoreService, private route: ActivatedRoute, alertController: AlertController, private router : Router,private storage: AngularFireStorage, private database: AngularFirestore) {
  this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>('reporte_foto');
    this.images = this.imageCollection.valueChanges();
    }

  ngOnInit() {
  const reportId: string = this.route.snapshot.paramMap.get('id');
  this.reporte = this.firestoreService.getReportDetail(reportId).valueChanges();
  }

  deleteReport(){
  this.firestoreService.deleteReport(this.reportId).then(() =>{
  this.router.navigate(['home'])
  });
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
