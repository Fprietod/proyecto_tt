import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadoMetroSinRegistroPage } from './estado-metro-sin-registro.page';

const routes: Routes = [
  {
    path: '',
    component: EstadoMetroSinRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadoMetroSinRegistroPageRoutingModule {}
