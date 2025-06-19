import { Component } from '@angular/core';
@Component({
  selector: 'app-employees',
  standalone: false,
  templateUrl: './employees.html',
  styleUrl: './employees.scss'
})

export class Employees {
  //employees : any[] = [];
  employees= [
    {name:'Maria',designation:'trainee',salary:'10,000',date:'25-10-2024',age:'23',shift:'8-6',gender:'Female'}
    //{name:'Peter',designation:'manager',salary:'30,000'}
  ];
  public visible = false;

  editEmployee(emp: any) {
    console.log('Editing', emp);
  }

  deleteEmployee(emp:any) {
    console.log('Deleting',emp)
  }
}


