import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  finalOrder: any = [];
  constructor() { }

  ngOnInit(): void {
  	this.finalOrder = localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : [];
  }

}
