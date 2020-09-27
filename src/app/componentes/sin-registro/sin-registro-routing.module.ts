import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinRegistroPage } from './sin-registro.page';

const routes: Routes = [
  {
    path: '',
    component: SinRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinRegistroPageRoutingModule {}
