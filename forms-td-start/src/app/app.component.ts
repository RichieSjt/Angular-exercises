import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  textAreaAnswer = '';
  genders = ['male', 'female'];
  submitted = false

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    questionAnswer: '',
    gender: '',
  };

  // Alternative approach
  @ViewChild('formRef') signupForm: NgForm;
  defaultQuestion = 'pet';

  suggestUserName() {
    const suggestedName = 'Superuser';

    // Patch specific values
    this.signupForm.form.patchValue({
      userData: { username: suggestedName },
    });

    // Setting value of the complete form
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })
  }

  // onSubmit(form: NgForm) {
  //   console.log('Submitted!!', form)
  // }
  onSubmit(form: NgForm) {
    console.log('Submitted!!', this.signupForm);
    this.submitted = true

    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.questionAnswer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset()
  }
}
