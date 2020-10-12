import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadoMetroSinRegistroPageRoutingModule } from './estado-metro-sin-registro-routing.module';

import { EstadoMetroSinRegistroPage } from './estado-metro-sin-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadoMetroSinRegistroPageRoutingModule
  ],
  declarations: [EstadoMetroSinRegistroPage]
})
export class EstadoMetroSinRegistroPageModule {}
