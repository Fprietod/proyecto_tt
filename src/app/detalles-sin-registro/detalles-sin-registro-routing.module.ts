import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesSinRegistroPage } from './detalles-sin-registro.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesSinRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesSinRegistroPageRoutingModule {}
