import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})

export class Login implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  showPassword = false;
  loginUsers: any[] = [];
  loginUserObj:any = {
    email: '',
    password: ''
  }
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&\\-+=()])(?=\\S+$).{8,20}$')]]
    })
  }

  get f(){
    return this.loginForm.controls; 
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.router.navigate(['/dashboard']);
    }
    else {
      this.loginForm.markAllAsTouched();

      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        if (control && control.invalid) {
          console.log(`Error in ${field}:`, control.errors);
        }
      });
    }
  }

  toggleShowPassword(){
    this.showPassword = !this.showPassword;
  }
}

