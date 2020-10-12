import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportarPageRoutingModule } from './reportar-routing.module';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ReportarPage } from './reportar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReportarPageRoutingModule
  ],
  declarations: [ReportarPage]
})
export class ReportarPageModule {}
