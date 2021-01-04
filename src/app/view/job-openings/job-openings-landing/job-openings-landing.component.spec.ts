import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOpeningsLandingComponent } from './job-openings-landing.component';

describe('JobOpeningsLandingComponent', () => {
  let component: JobOpeningsLandingComponent;
  let fixture: ComponentFixture<JobOpeningsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOpeningsLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOpeningsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
