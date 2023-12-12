import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AuthService } from 'src/app/AuthServices/auth.service';
import { StorageService } from 'src/app/AuthServices/storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class changePasswordComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  passwordForm: FormGroup;
  email : string = this.storage.getUser().email;

  constructor(private _snackBar: MatSnackBar,
              private fb: FormBuilder,
              private storage :StorageService,
              private userService : UserService
  ) {

    this.passwordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', Validators.required],
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(group: FormGroup) {
    const newPassword = group.get('newPassword')!.value;
    const repeatPassword = group.get('repeatPassword')!.value;

    return newPassword === repeatPassword ? null : { mismatch: true };
  }

  onChangePassword(oldPass: string, newPass: string): void {
    if (this.passwordForm.valid) {
      this.userService.changePassword(this.email, oldPass, newPass).subscribe(
        () => {
          this.openSnackBar('Password changed successfully');
        },
        (error) => {
          if (error.status === 406) {
            this.openSnackBar('Old password does not match the current password');
          } else {
            this.openSnackBar('Error changing password. Please try again.');
          }
        }
      );
      console.log('Form submitted successfully');
    }
  }


  openSnackBar(message:string) {
    this._snackBar.open(message, 'Great', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:5000
    });
  }
}
