import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte-iconos',
  templateUrl: './reporte-iconos.page.html',
  styleUrls: ['./reporte-iconos.page.scss'],
})
export class ReporteIconosPage implements OnInit {

	public categoria : string
  constructor(private router: Router ) { }

  ngOnInit() {
  }

 Categoria(){
 
 this.router.navigate[('/rutametro')];
 console.log("Hola")
 }

}
