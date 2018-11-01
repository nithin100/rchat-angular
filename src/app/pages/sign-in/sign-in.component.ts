import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SigninService } from '../../services/signin/signin.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/authservice/auth-service.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private siginService: SigninService, private router: Router, private authService: AuthServiceService) { }

  ngOnInit() {
    if (this.authService.isAuthorized()) {
      this.router.navigateByUrl('home');
    } else {
      this.signInFormGroup = this.formBuilder.group({
        username: '',
        password: ''
      });
    }
  }

  get username() {
    return this.signInFormGroup.get('username');
  }

  get password() {
    return this.signInFormGroup.get('password');
  }

  signIn() {
    var username: string = this.signInFormGroup.get('username').value;
    var password: string = this.signInFormGroup.get('password').value;
    this.siginService.signIn(username, password).subscribe(res => {
      //console.log(res);
      if (res.access_token != undefined && res.access_token != null) {
        this.router.navigateByUrl('home');
      } else {
        this.router.navigateByUrl('signin');
      }
    });
  }

}
