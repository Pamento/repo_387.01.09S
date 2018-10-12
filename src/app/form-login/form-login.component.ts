import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  formLogin: FormGroup;
  hide: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm();
  }
  loginForm() {
    this.formLogin = new FormGroup({
      email: new FormControl()
    });
  }

  submit() {
    console.log();
  }
}
