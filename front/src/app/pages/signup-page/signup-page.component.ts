import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
  providers: [AuthService]
})
export class SignupPageComponent implements OnInit {

  user: any = {};
  feedbackEnabled = false;
  error = null;
  processing = false;
  
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }


  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.auth.signup(this.user)
      //.then((result) => {
      //     // ... handle result, reset form, etc...
      //     // ... navigate with this.router.navigate(['...'])
      //     // ... maybe turn this to false if your're staying on the page - this.processing = false;
      //   })
      //   .catch((err) => {
      //     this.error = err.error.error; // :-)
      //     this.processing = false;
      //     this.feedbackEnabled = false;
      //   });
      }
    }
}