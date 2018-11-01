import { Component, OnInit, Input } from '@angular/core';
import { Conversation } from 'src/app/domain/conversation';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  @Input() conversation:Conversation;

  constructor() { }

  ngOnInit() {
  }

}
