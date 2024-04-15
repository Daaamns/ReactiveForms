import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../models/types/address';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  userName = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  zip = new FormControl('');
  city = new FormControl('');
  formValid: boolean = false;

  user: User = {
    userName: '',
    email: '',
    password: '',
    street: '',
    zip: '',
    city: '',
  };

  changeUsername() {
    this.formValid = true;
    this.user.userName = this.userName.value;
    this.user.email = this.email.getRawValue();
    this.user.password = this.password.getRawValue();
    this.user.street = this.street.getRawValue();
    this.user.zip = this.zip.getRawValue();
    this.user.city = this.city.getRawValue();
  }
}
