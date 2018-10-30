import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formTitle:string =  'Start chatting right now';
  registrationFormGroup: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.registrationFormGroup = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      mobile: ''
    });

    this.registrationFormGroup.valueChanges.subscribe(console.log);

  }
  
  get firstName() {
    return this.registrationFormGroup.get('firstName');
  }

  get lastName() {
    return this.registrationFormGroup.get('lastName');
  }

  get email() {
    return this.registrationFormGroup.get('email');
  }

  get mobile() {
    return this.registrationFormGroup.get('mobile');
  }

}

