import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentUpdateDialogComponent } from '../student-update-dialog/student-update-dialog.component';
import { StudentDeleteDialogComponent } from '../student-delete-dialog/student-delete-dialog.component';
import { StudentCreateDialogComponent } from '../student-create-dialog/student-create-dialog.component';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(
    private studentsService: StudentsService,
    public dialog: MatDialog
  ) {}

  students: Student[] = [];
  filteredStudents: Student[] = [];
  searchName: string = '';
  searchFinancialAid: number = 0;
  searchFinancialValue: number = 0;
  searchFinancialField: keyof Student = 'financialAid';
  searchComparisonOperator: '<' | '=' | '>' = '>';

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.studentsService.getAllStudents().subscribe((students) => {
      console.log('Fetched students:', students); // Add this line
      this.students = students;
      this.updateFilteredStudents();
    });
  }

  updateFilteredStudents(): void {
    this.filteredStudents = this.students.filter(student =>
      student.name?.toLowerCase().includes(this.searchName.toLowerCase()) &&
      this.compareFinancials(student[this.searchFinancialField] as number, this.searchFinancialValue, this.searchComparisonOperator)
    );
  }

  compareFinancials(studentValue: number, searchValue: number, operator: '<' | '=' | '>'): boolean {
    switch (operator) {
      case '<':
        return studentValue < searchValue;
      case '=':
        return studentValue === searchValue;
      case '>':
        return studentValue > searchValue;
      default:
        return true;
    }
  }

  onSearchNameChange(searchValue: string): void {
    this.searchName = searchValue;
    this.updateFilteredStudents();
  }

  onSearchFinancialAidChange(searchValue: number): void {
    this.searchFinancialAid = searchValue;
    this.updateFilteredStudents();
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(StudentCreateDialogComponent);
  
    dialogRef.afterClosed().subscribe((result: Student) => {
      if (result) {
        this.studentsService.createStudent(result).subscribe(() => {
          // Refresh the students list after creating a new student
          this.fetchStudents();
        });
      }
    });
  }
  

  openUpdateDialog(student: Student): void {
    const dialogRef = this.dialog.open(StudentUpdateDialogComponent, {
      data: student,
    });
  
    dialogRef.afterClosed().subscribe((updatedStudent: Student) => {
      if (updatedStudent) {
        const index = this.students.findIndex(s => s.id === updatedStudent.id);
        if (index !== -1) {
          this.students[index] = updatedStudent;
          this.updateFilteredStudents();
        }
      }
    });
  }

  //i want to be able to delete all students with a certain financial aid value
  //make the code for this
  
  

  openDeleteDialog(student: Student): void {
    const dialogRef = this.dialog.open(StudentDeleteDialogComponent, {
      data: student
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentsService.deleteStudent(result.id).subscribe(() => {
          // Refresh the students list after deletion
          this.fetchStudents();
        });
      }
    });
  }
  
}
