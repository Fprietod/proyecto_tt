import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutametroPageRoutingModule } from './rutametro-routing.module';

import { RutametroPage } from './rutametro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutametroPageRoutingModule
  ],
  declarations: [RutametroPage]
})
export class RutametroPageModule {}
