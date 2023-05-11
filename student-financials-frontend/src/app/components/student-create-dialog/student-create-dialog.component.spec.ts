import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCreateDialogComponent } from './student-create-dialog.component';

describe('StudentCreateDialogComponent', () => {
  let component: StudentCreateDialogComponent;
  let fixture: ComponentFixture<StudentCreateDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCreateDialogComponent]
    });
    fixture = TestBed.createComponent(StudentCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
