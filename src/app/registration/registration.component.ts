import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../components/usermodal';


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  alertClass = '';
  responseMessage = '';

  constructor(private authService: AuthService){}

  registerForm!: FormGroup;

  get name(){
    return this.registerForm.get('name')
  }
  get number(){
    return this.registerForm.get('number')
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
  userModel = new User()

  onSubmitHandler(){
    this.authService.register(this.registerForm.value).subscribe(
      (response) => {
        console.log(response);
        this.alertClass = 'register success';
        this.responseMessage = 'registration successful, thank you';
      })
      }
  }


