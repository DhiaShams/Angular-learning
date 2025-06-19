import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-employees',
  standalone: false,
  templateUrl: './employees.html',
  styleUrl: './employees.scss'
})

export class Employees {

  employeeForm!: FormGroup;
  submitted = false;
  employeeObj: any = {
    name: '',
    designation: '',
    date: '',
    age: '',
    gender: '',
    salary: '',
    shift: ''
  };
  response: any;
  formMode: 'add' | 'edit' = 'add';


  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[^\\s]+.*')]],
      designation: ['', [Validators.required]],
      date: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(18)]],
      gender: ['male', [Validators.required]],
      shift: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(1000)]]
    });

  }

  get f() {
    return this.employeeForm.controls;
  }


  //employees : any[] = [];
  employees = [
    { name: 'Maria', designation: 'trainee', salary: '10,000', date: '25-10-2024', age: '23', shift: '8-6', gender: 'Female' }
    //{name:'Peter',designation:'manager',salary:'30,000'}
  ];
  public visible = false;

  editEmployee(emp: any) {
    console.log('Editing', emp);
    $("#form-modal").modal('show');
  }

  deleteEmployee(emp: any) {
    console.log('Deleting', emp)
  }

  onClick() {
    this.submitted = true;
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
    }
    else {
      return;
    }
  }
  setFormMode(mode: 'add' | 'edit') {
    this.formMode = mode;
  }

}


