import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { Conversation } from 'src/app/domain/conversation';

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {

  constructor(private httpClient: HttpClient) { }

  public getConversationList(): Observable<Conversation[]> {
    var conversationsUrl = "http://localhost:8080/rchat/api/conversations"
    return this.httpClient.get<Conversation[]>(conversationsUrl).pipe(tap(val => console.log));
  }

}
