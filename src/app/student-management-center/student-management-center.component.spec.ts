import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentManagementCenterComponent } from './student-management-center.component';

describe('StudentManagementCenterComponent', () => {
  let component: StudentManagementCenterComponent;
  let fixture: ComponentFixture<StudentManagementCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentManagementCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentManagementCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
