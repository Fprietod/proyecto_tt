import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinRegistroPageRoutingModule } from './sin-registro-routing.module';

import { SinRegistroPage } from './sin-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinRegistroPageRoutingModule
  ],
  declarations: [SinRegistroPage]
})
export class SinRegistroPageModule {}
