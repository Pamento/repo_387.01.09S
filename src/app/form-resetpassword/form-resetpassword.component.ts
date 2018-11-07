import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { UserRegistration } from '../entities/user-registration';

@Component({
  selector: 'app-form-resetpassword',
  templateUrl: './form-resetpassword.component.html',
  styleUrls: ['./form-resetpassword.component.css']
})
export class FormResetpasswordComponent implements OnInit {

  formReset: FormGroup;
  hide: any;
  constructor(
    private fb: FormBuilder,
    private dbService: DataService
  ) { }

  ngOnInit() {
    this.loginForm();
  }
  loginForm() {
    return this.formReset = this.fb.group({
      email: [ null, Validators.compose([ Validators.email, Validators.required ])],
    });
  }
  get email() {
    return this.formReset.get('email');
  }

  submit() {
    console.log('reset in send');
    if(this.formReset.valid){
      const resetApprenticePass: UserRegistration = Object.assign({}, this.formReset.value);
      this.dbService.resetPassword(resetApprenticePass);
    }
  }
}
