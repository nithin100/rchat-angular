import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../domain/user';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RegistrationServiceService {

  private registrationUrl = 'http://localhost:8080/rchat/api/user/registration';

  constructor(private http: HttpClient) { }

  doRegister(newUser: User): Observable<User> {
    return this.http.post<User>(this.registrationUrl, newUser, httpOptions);
  }

}
