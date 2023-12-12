import {ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import { StorageService } from 'src/app/AuthServices/storage.service';
import {User} from "../../../model/User";
import {UserService} from "../../../service/user.service";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  user!: User;
  selectedFile: File | null = null;

  constructor(private _snackBar: MatSnackBar,private storage: StorageService, private userService: UserService, private cdr: ChangeDetectorRef) {}
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  ngOnInit(): void {
    let email = this.storage.getUser().email;
    this.userService.getUserByEmailReal(email).subscribe((data => {
      console.log(data);
      this.user = data;
      this.cdr.detectChanges();
    }));
  }

  onMiniFabClick() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      console.log("Selected file:", selectedFile);
      this.uploadImage(this.user.id, selectedFile);
    }
  }

  uploadImage(idUser: any, file: File) {
    console.log("Uploading image...");

    let formData = new FormData();
    formData.append('file', file, file.name);

    this.userService.uploadImg(formData, idUser).subscribe(
      (data) => {
        this.user.imagebyte = data.imagebyte;
        this.cdr.detectChanges();
        this.openSnackBar("Uploaded successfully");
      },
      (error) => {
        console.error("Error uploading image:", error);

        if (error.status === 403) {
          this.openSnackBar("Unable to upload file. Please try another one.");
        } else {
          this.openSnackBar("Unable to upload file. Please try another one.");
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
