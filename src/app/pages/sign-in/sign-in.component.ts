import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {SigninService} from '../../services/signin/signin.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInFormGroup:FormGroup;
  constructor(private formBuilder:FormBuilder,private siginService:SigninService) { }

  ngOnInit() {
    this.signInFormGroup = this.formBuilder.group({
       username:'',
       password:'' 
    });
  }

  get username(){
    return this.signInFormGroup.get('username');
  }

  get password(){
    return this.signInFormGroup.get('password');
  }

  signIn(){
    var username:string = this.signInFormGroup.get('username').value;
    var password:string = this.signInFormGroup.get('password').value;
    this.siginService.signIn(username,password).subscribe(res=>{
      console.log(res);
    });
  }

}
