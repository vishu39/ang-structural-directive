import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
template:`

`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


}

//--------video 12- ngif
// <h2 *ngIf="displayName; else elseBlock">welcome vishu</h2>
// <ng-template #elseBlock>
// <h2 >name is hidden</h2>
// </ng-template>
// <div *ngIf="displayName; then thenBlock; else elseBlock "></div>
// <ng-template #thenBlock>
// <h2>welcome vishu Sharma</h2>
// </ng-template>
// <ng-template #elseBlock>
// <h2 >name is hidden</h2>
// </ng-template>

// public displayName=true;

//----video 13----ngSwitch
// <div [ngSwitch]="color">
// <div *ngSwitchCase="'red'">you pick red color</div>
// <div *ngSwitchCase="'green'">you pick green color</div>
// <div *ngSwitchCase="'blue'">you pick blue color</div>
// <div *ngSwitchDefault>Pick again</div>
// <div></div>
// </div>

// public color="green";

//------------video 14 -------ngfor
// public colors=["red","blue","green","yellow"];

// <div *ngFor="let color of colors;index as i">
// <div *ngFor="let color of colors;first as f">
// <div *ngFor="let color of colors; last as l">
// <div *ngFor="let color of colors;odd as o">
// <div *ngFor="let color of colors;even as e">
// <h2>{{i}}{{color}}</h2>
// </div>

//-----video 15
// @Input('parentData') public name: any;
// @Output() public childEvent=new EventEmitter();
// <h2>{{"hello " +name}}</h2>
// <button (click)="fireEvent()">Send Event</button>
// fireEvent(){
//   this.childEvent.emit('Hey Codevolution')
// }

//------------video 16 -------pipes
// <h2>{{name}}</h2>
// <h2>{{name | lowercase}}</h2>
// <h2>{{name | uppercase}}</h2>
// <h2>{{message | titlecase}}</h2>
// <h2>{{name | slice:3:5}}</h2>
// <h2>{{person | json}}</h2>
// <h2>{{5.678 | number:'1.2-3'}}</h2>
// <h2>{{5.678 | number:'3.4-5'}}</h2>
// <h2>{{5.678 | number:'3.1-2'}}</h2>
// <h2>{{0.25 | percent}}</h2>
// <h2>{{0.25 | currency:'INR'}}</h2>
// <h2>{{date}}</h2>
// <h2>{{date | date:'short'}}</h2>
// <h2>{{date | date:'shortDate'}}</h2>
// <h2>{{date | date:'shortTime'}}</h2>

// public name='codevolution';
// public message='welcome to codevlution';
// public person={
// "firstName":"John",
// "lastname":"Doe"
// }
// public date=new Date();