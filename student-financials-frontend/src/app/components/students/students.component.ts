import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(private studentsService: StudentsService) {}

  students: Student[] = [];
  filteredStudents: Student[] = [];
  searchName: string = '';
  searchFinancialAid: number = 5000;

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
    this.filteredStudents = this.students.filter(
      (student) =>
        (this.searchName === '' || student.name?.toLowerCase().includes(this.searchName.toLowerCase())) &&
        (this.searchFinancialAid === 0 || student.financialAid >= this.searchFinancialAid)
    );
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
    // Implement the logic for opening the create student dialog here
    console.log('Open create student dialog');
  }

  openUpdateDialog(student: Student): void {
    // Implement the logic for opening the update student dialog here
    console.log('Open update student dialog for:', student);
  }

  openDeleteDialog(student: Student): void {
    // Implement the logic for opening the delete student dialog here
    console.log('Open delete student dialog for:', student);
  }
}
