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
  formMode: any;


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
    { name: 'Maria', designation: 'Intern', salary: '1000', date: '', age: '23', shift: '6pm-8am', gender: 'Female' },
    { name: 'Peter', designation: 'Junior Developer', salary: '15000', date: '', age: '25', shift: '9am-8pm', gender: 'Male' }
  ];
  public visible = false;

  editEmployee(emp: any) {
    console.log('Editing', emp);
    this.employeeForm.patchValue({
      name: emp.name,
      designation: emp.designation,
      date: emp.date,
      age: emp.age,
      gender: emp.gender,
      salary: emp.salary,
      shift: emp.shift
    });
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
  setFormMode(mode: any) {
    this.formMode = mode;
    this.submitted=false;
    this.employeeForm.reset();
  }

}






