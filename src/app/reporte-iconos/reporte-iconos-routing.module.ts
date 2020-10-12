import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteIconosPage } from './reporte-iconos.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteIconosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteIconosPageRoutingModule {}
