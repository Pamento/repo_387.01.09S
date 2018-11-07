import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CompareValidator } from '../shered/compar-validator.directive';
import { UserRegistration } from '../entities/user-registration';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form-signup',
  templateUrl: './form-signup.component.html',
  styleUrls: ['./form-signup.component.css']
})
export class FormSignupComponent implements OnInit {

  hide: any;
  formSignup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dataBase: DataService
  ) { }

  /*
   * ngOnInit() this function on the moment of creation of signup_component
   * go to build an reactiv form by createFormRegister() by help of get()
   * the form catch up the values for submit them.
   */
  ngOnInit() {
    this.createFormRegister();
  }
  createFormRegister():any {
    return this.formSignup = this.fb.group({
      userName: [ null, Validators.required ],
      email: [ null, Validators.compose([ Validators.email, Validators.required ])],
      password: [ null, Validators.compose([ Validators.minLength(8), Validators.required ])],
      confirmPassword: [ null, [ Validators.required, CompareValidator('password')] ]
    });
  }
  get userName() {
    return this.formSignup.get('userName');
  }
  get email() {
    return this.formSignup.get('email');
  }
  get password() {
    return this.formSignup.get('password');
  }
  get confirmPassword() {
    return this.formSignup.get('confirmPassword');
  }
  submit():any {
    if (this.formSignup.valid) {
      const newApprentice: UserRegistration = Object.assign({}, this.formSignup.value );
      delete newApprentice.confirmPassword;
      console.log(newApprentice);
      this.dataBase.addUser(newApprentice).subscribe(
        (data) => { console.log('data from addUser ',data)},
        (error) => { console.log('!!! Error from addUser ',error)}
      );
      this.formSignup.reset();
    }
  }
}
