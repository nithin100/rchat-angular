import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../authservice/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) { }

  canActivate(): boolean {
    //on token not expiry return true else redirect and return false
    if (this.authService.isAuthorized()) {
      return true;
    }
    else {
      if(localStorage.getItem('token')!=null)
        this.router.navigateByUrl('/signin?session=expired');
      else
        this.router.navigateByUrl('/signin');
      return false;
    }
  }
}
