import { Component, OnInit } from '@angular/core';
import { FirestoreService } from "../servicios/firestore.service";
import { reporte } from '../models/reporte';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

	public reporte: Observable<reporte>;
	public reportId: string = this.route.snapshot.paramMap.get('id');

  constructor(private firestoreService: FirestoreService, private route: ActivatedRoute, alertController: AlertController, private router : Router) { }

  ngOnInit() {
  const reportId: string = this.route.snapshot.paramMap.get('id');
  this.reporte = this.firestoreService.getReportDetail(reportId).valueChanges();
  }

  deleteReport(){
  this.firestoreService.deleteReport(this.reportId).then(() =>{
  this.router.navigateByUrl[('/estado-metro')];
  });
  }

}
