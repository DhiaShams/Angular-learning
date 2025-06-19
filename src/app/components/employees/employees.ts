import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../_service/api';
import { id } from 'date-fns/locale';
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
  employeeList: any;
  employeeId: any;
  employeeObj: any = {
    name: '',
    designation: '',
    date: '',
    age: '',
    gender: '',
    salary: '',
    shift: '',
    phone: ''
  };
  response: any;
  formMode: any;
  editMode = false;


  constructor(private fb: FormBuilder, private router: Router, private Api: ApiService) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[^\\s]+.*')]],
      designation: ['', [Validators.required]],
      date: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(18)]],
      gender: ['male', [Validators.required]],
      shift: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(1000)]]
    });
    this.getEmployeeList();
  }

  get f() {
    return this.employeeForm.controls;
  }
  public visible = false;

  editModal(emp: any) {
    this.editMode = true;
    console.log('Editing', emp);
    this.employeeId = emp.id;
    this.employeeForm.patchValue({
      name: emp.name,
      designation: emp.designation,
      date: emp.date,
      age: emp.age,
      gender: emp.gender,
      salary: emp.salary,
      shift: emp.shift,
      phone:emp.phone
    });
    $("#form-modal").modal('show');
  }

  deleteModal(emp: any) {
    console.log('Deleting', emp)
    this.employeeId = emp.id;
    $("#delete-modal").modal('show');
  }

  deleteEmployee() {
    console.log(' this.employeeId', this.employeeId);
    this.Api.deleteEmployee(this.employeeId).subscribe(() => {
      this.getEmployeeList();
      $("#delete-modal").modal('hide');
    })

  }

  onClick() {
    this.submitted = true;
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
    }
    else {
      return;
    }
    if (this.editMode && this.employeeId != null) {
      console.log('edit');
      
      const data = {
        ...this.employeeForm.value
      }
      this.Api.editEmployee(this.employeeId, data).subscribe(data => {
        console.log(' this.employeeId', this.employeeId);
        this.Api.editEmployee(this.employeeId, data).subscribe(data => {
          $("#form-modal").modal('hide');
          this.getEmployeeList();
        })
      })

    } else {
      console.log('add');
      
      const data = {
        ...this.employeeForm.value
      }
      this.Api.addEmployee(data).subscribe(data => {
        console.log(data);
        $("#form-modal").modal('hide');
        this.getEmployeeList();
      })
    }

  }
  setFormMode(mode: any) {
    console.log('kerii');
    
    this.formMode = mode;
      $("#form-modal").modal('show');
    this.submitted = false;
    if(mode == 'add'){
      this.employeeForm.reset();
    }
  }
  getEmployeeList() {
    this.Api.getEmployeeList().subscribe(data => {
      this.response = data;
      console.log(this.response, 'data');
      this.employeeList = this.response;
    })
  }

}









