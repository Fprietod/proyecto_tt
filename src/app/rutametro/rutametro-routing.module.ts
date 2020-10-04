import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutametroPage } from './rutametro.page';

const routes: Routes = [
  {
    path: '',
    component: RutametroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutametroPageRoutingModule {}
