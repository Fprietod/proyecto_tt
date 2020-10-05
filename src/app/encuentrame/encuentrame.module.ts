import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuentramePageRoutingModule } from './encuentrame-routing.module';

import { EncuentramePage } from './encuentrame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuentramePageRoutingModule
  ],
  declarations: [EncuentramePage]
})
export class EncuentramePageModule {}
