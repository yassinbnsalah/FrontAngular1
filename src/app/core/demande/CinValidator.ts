import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function cinValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      // If the value is empty, consider it valid (you may adjust this based on your requirements)
      return null;
    }

    // Check if the value is a numeric string with exactly 8 digits
    const isValid = /^\d{8}$/.test(value);

    return isValid ? null : { cin: true };
  };
}


export function EmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
  
      if (!value) {
        // If the value is empty, consider it valid (you may adjust this based on your requirements)
        return null;
      }
  
      // Check if the value is a numeric string with exactly 8 digits
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  
      return isValid ? null : { email: true };
    };
  }