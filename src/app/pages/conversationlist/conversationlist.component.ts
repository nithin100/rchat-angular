import { Component, OnInit } from '@angular/core';
import { ConversationsService } from 'src/app/services/conversationservice/conversations.service';
import { Conversation } from 'src/app/domain/conversation';


@Component({
  selector: 'app-conversationlist',
  templateUrl: './conversationlist.component.html',
  styleUrls: ['./conversationlist.component.css']
})
export class ConversationlistComponent implements OnInit {
  conversationList: Conversation[];
  constructor(private conversationsService:ConversationsService) { }

  ngOnInit() {
    var that=this;
    this.conversationsService.getConversationList().subscribe(res=>{
        that.conversationList = res;
    });
  }

}
