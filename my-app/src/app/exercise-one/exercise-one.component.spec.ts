import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseOneComponent } from './exercise-one.component';

describe('ExerciseOneComponent', () => {
  let component: ExerciseOneComponent;
  let fixture: ComponentFixture<ExerciseOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseOneComponent]
    });
    fixture = TestBed.createComponent(ExerciseOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
