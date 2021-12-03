import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
template:`
<h2>Employee List</h2>
<h3>{{errorMsg}}</h3>
<ul *ngFor="let employee of employees">
<li>{{employee.name}}</li>
</ul>
`,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees:any=[]
  errorMsg: string | undefined;

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployee()
    .subscribe((data)=>{this.employees=data},
               (error)=>{ this.errorMsg=error});
  }
}
// this.employees=this._employeeService.getEmployee();