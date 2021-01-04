import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOpeningsCreateComponent } from './job-openings-create.component';

describe('JobOpeningsCreateComponent', () => {
  let component: JobOpeningsCreateComponent;
  let fixture: ComponentFixture<JobOpeningsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOpeningsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOpeningsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
