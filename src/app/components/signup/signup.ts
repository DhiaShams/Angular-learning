import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})

export class Signup implements OnInit{
  signupForm!: FormGroup;
  submitted = false;
  showPassword = false;
  showConfirmPassword = false;
  signupUsers: any[] = [];
  signupObj: any = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    gender: '',
    country: '',
    password: ''
  };
  response: any;

  constructor(private fb: FormBuilder, private router: Router,
    private Api: ApiService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fname: ['', [Validators.required, Validators.pattern('^[^\\s]+.*')]],
      lname: ['', [Validators.required, Validators.pattern('^[^\\s]+.*')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      gender: ['male', [Validators.required]],
      country: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8,20}$')]],
      confirm: ['', [Validators.required]],
      tac: ['', [Validators.requiredTrue]]
    }, { validator: this.passwordMatchValidator });
  }

  get f() {
    return this.signupForm.controls;
  }


  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirm = form.get('confirm')?.value;

    if (password != confirm) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      const data = {
        //...this.signupForm.value
        id: 1,
        name: "Essa Ann",
        email: "essa@gmail.com",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
      }
      this.Api.signUp(data).subscribe(data => {
          this.response = data;
          console.log(this.response, 'users');
          this.router.navigateByUrl('/dashboard', { state: { User: this.signupForm.value } })
        })
      }
    else {
        return;
      }

    }
    toggleShowPassword() {
      this.showPassword = !this.showPassword
    }

    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword
    }

    onSignUp() {
      this.signupUsers.push(this.signupObj);
      localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
      this.signupObj = {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        gender: '',
        country: '',
        password: ''
      };
    }
  }
