import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
}) 
export class UserHomeComponent implements OnInit {
  storeitem:string[]=['General store','Medicine store','Cosmetic store','Dairy store','Stationary store'];
show:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  showall()
  {
this.show=!this.show;
  }
}
