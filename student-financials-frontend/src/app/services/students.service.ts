import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://localhost:7034/api/Students'; // Replace with the correct URL

getAllStudents(): Observable<Student[]> {
  return this.http.get<Student[]>(this.apiUrl);
}

getStudent(id: number): Observable<Student> {
  return this.http.get<Student>(`${this.apiUrl}/${id}`);
}

createStudent(student: Student): Observable<Student> {
  return this.http.post<Student>(this.apiUrl, student);
}

updateStudent(id: number, student: Student): Observable<Student> {
  return this.http.put<Student>(`${this.apiUrl}/${id}`, student);
}

deleteStudent(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}


}
