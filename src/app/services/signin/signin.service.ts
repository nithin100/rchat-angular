import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { tap, delay } from 'rxjs/operators';

var signInUrl: string = 'http://localhost:8080/oauth/token?grant_type=password';
const signInHeaders:HttpHeaders=new HttpHeaders({
   'Authorization':'Basic '+btoa("client:secret") 
});
@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private httpClient:HttpClient) { }

  public signIn(username:string, password:string):Observable<any>{
    //toDo: Send username and credentials in urlencoded form
    
    signInUrl +='&username='+username+'&password='+password; 
    return this.httpClient.post(signInUrl,null,{headers:signInHeaders}).pipe(tap(res=>{
      localStorage.setItem('token',res.access_token);
      /* console.log('Stored in local storage'); */
    }));
  }

}
