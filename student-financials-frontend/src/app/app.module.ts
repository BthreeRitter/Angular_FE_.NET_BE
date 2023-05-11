import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentCreateDialogComponent } from './components/student-create-dialog/student-create-dialog.component';
import { StudentUpdateDialogComponent } from './components/student-update-dialog/student-update-dialog.component';
import { StudentDeleteDialogComponent } from './components/student-delete-dialog/student-delete-dialog.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CdkTableModule } from '@angular/cdk/table';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentCreateDialogComponent,
    StudentUpdateDialogComponent,
    StudentDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    CdkTableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

