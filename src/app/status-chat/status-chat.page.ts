import { Component, OnInit } from '@angular/core';
import {ChatsService, chat } from "../servicios/chats.service";

@Component({
  selector: 'app-status-chat',
  templateUrl: './status-chat.page.html',
  styleUrls: ['./status-chat.page.scss'],
})
export class StatusChatPage implements OnInit {

	 public chatRooms :any =[];
  // 

  constructor(public chatservice : ChatsService) { }

  ngOnInit() {
   this.chatservice.getChatRooms().subscribe( chats => {
      
      this.chatRooms = chats;
      
    })
  }

}
