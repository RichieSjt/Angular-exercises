import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedPage = 'recipes';

  handleNavigation = (page: string) => {
    this.selectedPage = page;
  };
}
