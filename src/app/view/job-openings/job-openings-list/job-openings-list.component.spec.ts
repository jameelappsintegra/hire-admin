import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOpeningsListComponent } from './job-openings-list.component';

describe('JobOpeningsListComponent', () => {
  let component: JobOpeningsListComponent;
  let fixture: ComponentFixture<JobOpeningsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOpeningsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOpeningsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
