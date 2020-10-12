import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadoMetroPage } from './estado-metro.page';

const routes: Routes = [
  {
    path: '',
    component: EstadoMetroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadoMetroPageRoutingModule {}
