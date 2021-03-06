import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

@Component({
 selector: 'app-signup',
 templateUrl: './signup.component.html',
 styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 feedbackEnabled = false;
 error = null;
 processing = false;
 username: String;
 password: String;

 constructor(private authService: AuthService, private router: Router) { }

 ngOnInit() {
 }

 submitForm(form) {
   this.error = '';
   this.feedbackEnabled = true;
   if (form.valid) {
     this.processing = true;
     const data = {
       username: this.username,
       password: this.password,
     }
     this.authService.signup(data)
       .then((result) => {
         this.router.navigate(['/homepage'])
         //     // ... navigate with this.router.navigate(['...'])
       })
       .catch((err) => {
         this.error = err.error.error; // :slightly_smiling_face:
         this.processing = false;
         this.feedbackEnabled = false;
       });

   };
 }
}
