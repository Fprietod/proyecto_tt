import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusChatPageRoutingModule } from './status-chat-routing.module';

import { StatusChatPage } from './status-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusChatPageRoutingModule
  ],
  declarations: [StatusChatPage]
})
export class StatusChatPageModule {}
