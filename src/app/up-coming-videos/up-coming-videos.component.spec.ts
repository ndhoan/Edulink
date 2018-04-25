import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComingVideosComponent } from './up-coming-videos.component';

describe('UpComingVideosComponent', () => {
  let component: UpComingVideosComponent;
  let fixture: ComponentFixture<UpComingVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpComingVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpComingVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
