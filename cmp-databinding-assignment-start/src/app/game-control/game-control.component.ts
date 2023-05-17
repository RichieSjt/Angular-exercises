import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output("handleGame") gameHandler = new EventEmitter<number>();
  interval;
  counter = 0;

  constructor() {}

  ngOnInit(): void {}

  startGame = () => {
    this.interval = setInterval(
      () => this.gameHandler.emit((this.counter += 1)),
      1000
    );
  };

  stopGame = () => {
    clearInterval(this.interval);
  }
}
