import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];

  gameHandler = (num: number) => {
    const isEven = num % 2 === 0;

    isEven ? this.evenNumbers.push(num) : this.oddNumbers.push(num);
  };
}
