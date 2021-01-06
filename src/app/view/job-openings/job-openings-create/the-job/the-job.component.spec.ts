import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheJobComponent } from './the-job.component';

describe('TheJobComponent', () => {
  let component: TheJobComponent;
  let fixture: ComponentFixture<TheJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
