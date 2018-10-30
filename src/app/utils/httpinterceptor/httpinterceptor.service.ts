import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs/internal/Observable";
import {tokenNotExpired} from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      if(localStorage.getItem('token')!=null && tokenNotExpired('token')){
        req = req.clone({
          setHeaders:{
            Authorization : 'Bearer '+localStorage.getItem('token')
          }
        })
      }
      return next.handle(req);
  }
}
