import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';


@Component({
  selector: 'app-student-create-dialog',
  templateUrl: './student-create-dialog.component.html',
  styleUrls: ['./student-create-dialog.component.css']
})
export class StudentCreateDialogComponent {
  student: Partial<Student> = {};

  constructor(public dialogRef: MatDialogRef<StudentCreateDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.student);
  }
}
