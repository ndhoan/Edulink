import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentManagementSidebarComponent } from './student-management-sidebar.component';

describe('StudentManagementSidebarComponent', () => {
  let component: StudentManagementSidebarComponent;
  let fixture: ComponentFixture<StudentManagementSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentManagementSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentManagementSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
