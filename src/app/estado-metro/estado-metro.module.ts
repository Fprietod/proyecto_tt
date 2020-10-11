import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadoMetroPageRoutingModule } from './estado-metro-routing.module';

import { EstadoMetroPage } from './estado-metro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadoMetroPageRoutingModule
  ],
  declarations: [EstadoMetroPage]
})
export class EstadoMetroPageModule {}
