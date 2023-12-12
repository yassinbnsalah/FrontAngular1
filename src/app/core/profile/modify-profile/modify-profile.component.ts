import { Component } from '@angular/core';
import {User} from "../../../model/User";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {StorageService} from "../../../AuthServices/storage.service";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-modify-profile',
  templateUrl: './modify-profile.component.html',
  styleUrls: ['./modify-profile.component.css']
})
export class ModifyProfileComponent {
  userEmail!: string;
  user!: User;
  myForm!: FormGroup;
  step: number = 0;
  isFormValid: boolean = false;

  constructor(private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private userService: UserService,
    private storage: StorageService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  ngOnInit(): void {
    this.userEmail = this.storage.getUser().email;
    this.getUserDetails();
    console.log("this.userEmail")
  }

  getUserDetails() {
    this.userService.getUserByEmailReal(this.userEmail).subscribe(
      (user) => {
        this.user = user;
        console.log(user);
        this.initializeForm();
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }

  initializeForm() {
    this.myForm = this.fb.group({
      nomEt: [this.user.nomEt, [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      prenomEt: [this.user.prenomEt, [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      cin: [this.user.cin, [Validators.required, Validators.pattern(/^[0-9]{8}$/)]],
      ecole: [this.user.ecole, Validators.required],
      dateNaissance: [new Date(this.user.dateNaissance), [Validators.required, this.validateDateOfBirth]],
      createdAt: [this.user.createdAt],
      role: [this.user.role],
      email: [this.user.email],
      enabled: [this.user.enabled],
    });

    this.myForm.valueChanges.subscribe(() => {
      this.isFormValid = this.myForm.valid;
    });
  }

  validateDateOfBirth(control: any) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    return selectedDate <= currentDate ? null : { futureDate: true };
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  updateUser() {
    const formValues = this.myForm.value;

    const chosenDate = formValues.dateNaissance; // Replace this with your actual chosen date
    const newDate = new Date(chosenDate);
    newDate.setDate(chosenDate.getDate() + 1);

    this.user.nomEt = formValues.nomEt;
    this.user.prenomEt = formValues.prenomEt;
    this.user.cin = formValues.cin;
    this.user.ecole = formValues.ecole;
    this.user.dateNaissance = newDate;

    this.userService.updateUser(this.user).subscribe(
      (updatedUser) => {
        console.log('User updated:', updatedUser);
        this.openSnackBar('User ' + updatedUser.email + ' updated successfully ');
      },
      (error) => {
        console.error('Error updating this user:', error);
        this.openSnackBar('Error updating this user ' + this.user.email);
        },
      () => {
        console.log('Update user request completed.');
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
