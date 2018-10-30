import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<any>{ 
    return this.httpClient.get('http://localhost:8080/api/hello',{responseType: 'text' as 'text'});
  }
}
