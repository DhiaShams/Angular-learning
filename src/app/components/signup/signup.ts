import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})

export class Signup implements OnInit {
  signupForm!: FormGroup;
  submitted = false;
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

  constructor(private fb: FormBuilder) { }

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
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      }
    else {
        return;
      }

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
