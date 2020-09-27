import { Component, OnInit } from '@angular/core';
import {ChatsService, chat } from "../servicios/chats.service";
import { NavParams, ModalController } from "@ionic/angular";
import { ChatComponent } from "../componentes/chat/chat.component";


@Component({
  selector: 'app-status-chat',
  templateUrl: './status-chat.page.html',
  styleUrls: ['./status-chat.page.scss'],
})
export class StatusChatPage implements OnInit {

	 public chatRooms :any =[];
  // 

  constructor(public chatservice : ChatsService,
   private modal: ModalController) { }

  ngOnInit() {
   this.chatservice.getChatRooms().subscribe( chats => {
      
      this.chatRooms = chats;
      
    })
  }

  openChat(chat){
   this.modal.create({
      component: ChatComponent,
      componentProps : {
        chat: chat
      }
    }).then( (modal) => modal.present())

  }





}
