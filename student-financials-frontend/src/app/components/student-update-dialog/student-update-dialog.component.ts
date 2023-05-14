import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-update-dialog',
  templateUrl: './student-update-dialog.component.html',
  styleUrls: ['./student-update-dialog.component.css']
})
export class StudentUpdateDialogComponent {
  student: Partial<Student>;

  constructor(
    public dialogRef: MatDialogRef<StudentUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
    private studentsService: StudentsService  // Add this
  ) {
    this.student = { ...data };
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.studentsService.updateStudent(this.data.id, this.student as Student).subscribe(
      () => {
        this.dialogRef.close(this.student);
      },
      error => {
        console.error('Error updating student:', error);
      }
    );
  }
  
}