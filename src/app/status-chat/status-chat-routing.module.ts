import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusChatPage } from './status-chat.page';

const routes: Routes = [
  {
    path: '',
    component: StatusChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusChatPageRoutingModule {}
