import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { User } from '../models/types/address';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  userForm = this.fb.group({
    userName: [''],
    credentials: this.fb.group({
      email: [''],
      password: [''],
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
    console.log(this.userForm.value);
  }
}
