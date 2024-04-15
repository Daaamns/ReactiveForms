import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/types/address';
import { passwordValidator } from './user.validator/password-validator';
import { emailValidator } from './user.validator/email-validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  submitted: boolean = false;

  userForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(4)]],
    credentials: this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, passwordValidator]],
    }),
    address: this.fb.group({
      street: [''],
      zip: [''],
      city: [''],
    }),
  });
  formValid: boolean = false;
  constructor(private fb: FormBuilder) {}

  user: User = {
    userName: '',
    email: '',
    password: '',
    street: '',
    zip: '',
    city: '',
  };

  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);
  }
}
