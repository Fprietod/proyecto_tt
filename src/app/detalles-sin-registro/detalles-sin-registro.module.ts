import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesSinRegistroPageRoutingModule } from './detalles-sin-registro-routing.module';

import { DetallesSinRegistroPage } from './detalles-sin-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesSinRegistroPageRoutingModule
  ],
  declarations: [DetallesSinRegistroPage]
})
export class DetallesSinRegistroPageModule {}
