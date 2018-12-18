import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Errors, UserService } from '../core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
authType: String = '';
  title: String = '';
  errors: Errors = {errors: {}};
  isSubmitting = false;
  errorMessage: string;
  authForm: FormGroup;

  constructor(
     private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
   }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl());
      }
    });
  }

  submitForm() {
    this.isSubmitting = true;
    this.errorMessage = null;
    this.errors = { errors: {} };

    const credentials = this.authForm.value;
    const postData = {
      username: credentials.email,
      password: credentials.password
    }
    this.userService
      .attemptAuth(postData)
      .subscribe(
        data => this.router.navigateByUrl('/'),
        err => {
          this.errors = err;
          this.errorMessage = err.message;
          this.isSubmitting = false;
        }
      );
  }

}
