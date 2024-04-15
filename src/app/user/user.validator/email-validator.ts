import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(
  control: AbstractControl
): ValidationErrors | null {
  const emailRegex = new RegExp(
    '^[a-zA-Z0-9._%+-]+@wilder\\.school(?:\\.[a-zA-Z]+)+$'
  );
  const valid = emailRegex.test(control.value);

  const errors = {
    email: {
      rules: 'must contain "@wilder.school.xx"',
    },
  };

  return !valid ? errors : null;
}
