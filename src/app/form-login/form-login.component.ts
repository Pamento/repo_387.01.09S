import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { UserRegistration } from '../entities/user-registration';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  formLogin: FormGroup;
  hide: any;
  constructor(
    private fb: FormBuilder,
    private dbService: DataService
  ) { }

  ngOnInit() {
    this.loginForm();
  }
  loginForm() {
    return this.formLogin = this.fb.group({
      email: [ null, Validators.compose([ Validators.email, Validators.required ])],
      password: [ null, Validators.required ]
    });
  }
  get email() {
    return this.formLogin.get('email');
  }
  get password() {
    return this.formLogin.get('password');
  }

  submit() {
    console.log('log in send');
    if(this.formLogin.valid){
      const logApprentice: UserRegistration = Object.assign({}, this.formLogin.value);
      this.dbService.login(logApprentice)
      .subscribe(
        data => { 
          this.dbService.resLoginData = data,
          localStorage.setItem('token', JSON.stringify(data._id));
        }
      )
    }
  }
}
