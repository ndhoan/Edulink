import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentManagementTopbarComponent } from './student-management-topbar.component';

describe('StudentManagementTopbarComponent', () => {
  let component: StudentManagementTopbarComponent;
  let fixture: ComponentFixture<StudentManagementTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentManagementTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentManagementTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
