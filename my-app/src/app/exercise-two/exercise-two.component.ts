import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.scss'],
})
export class ExerciseTwoComponent {
  userName = '';

  createUserHandler = () => {
    console.log(`Username ${this.userName} was created!`);
    this.userName = '';
  };
}
