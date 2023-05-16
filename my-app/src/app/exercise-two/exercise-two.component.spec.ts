import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTwoComponent } from './exercise-two.component';

describe('ExerciseTwoComponent', () => {
  let component: ExerciseTwoComponent;
  let fixture: ComponentFixture<ExerciseTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseTwoComponent]
    });
    fixture = TestBed.createComponent(ExerciseTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
