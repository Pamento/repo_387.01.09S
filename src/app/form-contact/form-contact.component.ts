import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { CompareValidator } from '../shered/compar-validator.directive';
import { UserContact } from '../entities/user-contact';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {
  hide: any;
  formContact: FormGroup;
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
  createFormRegister(): any {
    return this.formContact = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.email, Validators.required])],
      message: [null, Validators.required],
      confirmEmail: [null, Validators.compose([Validators.email, Validators.required, CompareValidator('email')])]
    });
  }
  get name() {
    return this.formContact.get('name');
  }
  get email() {
    return this.formContact.get('email');
  }
  get confirmEmail() {
    return this.formContact.get('confirmEmail');
  }
  get message() {
    return this.formContact.get('message');
  }
  submit(): any {
    if (this.formContact.valid) {
      const userMessage: UserContact = Object.assign({}, this.formContact.value);
      console.log(userMessage);
      delete userMessage.confirmEmail;
      this.dataBase.email(userMessage);
      this.formContact.reset();
    }
  }
}
