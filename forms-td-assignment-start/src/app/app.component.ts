import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("formRef", {static: false}) signupForm: NgForm;

  subscriptionPlans = ["Basic", "Advanced", "Pro"];

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
