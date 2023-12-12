import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AuthService } from 'src/app/AuthServices/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  summaryFormGroup: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  nomEt: string = '';
  prenomEt: string = '';
  cin: string = '';
  dateNaissance: string = '';
  ecole: string = '';
  email: string = '';
  password: string = '';

  constructor(private _snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.summaryFormGroup = this.fb.group({
      nomEt: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      prenomEt: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      cin: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      dateNaissance: ['', [Validators.required, this.dateOfBirthValidator.bind(this)]],
      ecole: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  dateOfBirthValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    return selectedDate < currentDate ? null : { futureDate: true };
  }

  onSubmit() {
    console.log(this.summaryFormGroup.value);
    this.authService.Register(this.summaryFormGroup.value).subscribe(
      (data: any) => {
        console.log("Success response:", data);

        if (data.includes('User registered successfully')) {
          this.openSnackBar("Inscription avec succès. Vérifiez votre boîte email pour activer votre compte !");
        } else {
          this.openSnackBar("Erreur inattendue lors de l'inscription.");
        }
      },
      (err) => {
        console.log("Error response:", err);

        if (err.status === 404) {
          this.openSnackBar("L'utilisateur existe déjà. Vérifiez votre boîte mail.");
        } else {
          this.openSnackBar("Erreur inattendue lors de l'inscription.");
        }
      }
    );
  }


  openSnackBar(message:string) {
    this._snackBar.open(message, 'Great', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:5000
    });
  }
}
