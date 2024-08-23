import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
  } from '@angular/forms';
  import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    loginForm: FormGroup;
    alertClass = '';
    responseMessage = '';
  
  
  
    constructor(private fb: FormBuilder, private authService: AuthService) {
      this.loginForm = this.fb.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]],
      });
    }
  
    get email() {
      return this.loginForm.get('email');
    }
  
    get password() {
      return this.loginForm.get('password');
    }
  
    onSubmitHandler() {
      //console.log(this.loginForm.value)
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          console.log(response);
          this.alertClass = 'alert alert-success';
          this.responseMessage = 'login successful, thank you';
          localStorage.setItem('token', response.access_token)
        },
        (err) => {
          console.log(err);
          this.alertClass = 'alert alert-danger';
          this.responseMessage = 'login failed, please try again';
        }
      );
    }
  }