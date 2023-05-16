import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-three',
  templateUrl: './exercise-three.component.html',
  styleUrls: ['./exercise-three.component.scss']
})
export class ExerciseThreeComponent {
    isTextShown = false
    logs: string[] = []

    toggleDetails = () => {
        this.isTextShown = !this.isTextShown
        this.logs.push(new Date().toISOString())
    }
}
