import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-signup',
  templateUrl: './form-signup.component.html',
  styleUrls: ['./form-signup.component.css']
})
export class FormSignupComponent implements OnInit {

  hide: any;
  formSignup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createFormRegister();
  }
  createFormRegister() {
    this.formSignup = new FormGroup({
      userName: new FormControl()
    });
  }

  submit() {
    console.log();
  }
}
