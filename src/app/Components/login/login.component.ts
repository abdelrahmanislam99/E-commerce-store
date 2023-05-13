import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

/** @title Form field with error messages */
@Component({
  selector: 'form-field-error-example',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class FormFieldErrorExample {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
