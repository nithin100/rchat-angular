import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  public isAuthorized():boolean{
    return tokenNotExpired('token');
  }
}
