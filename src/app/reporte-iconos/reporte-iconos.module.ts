import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteIconosPageRoutingModule } from './reporte-iconos-routing.module';

import { ReporteIconosPage } from './reporte-iconos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteIconosPageRoutingModule
  ],
  declarations: [ReporteIconosPage]
})
export class ReporteIconosPageModule {}
