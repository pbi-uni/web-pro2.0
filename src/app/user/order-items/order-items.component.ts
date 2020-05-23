import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

rating=4;

  constructor() { }

  ngOnInit(): void {
  }

}
