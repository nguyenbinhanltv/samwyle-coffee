import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashier-service',
  templateUrl: './cashier-service.component.html',
  styleUrls: ['./cashier-service.component.scss']
})
export class CashierServiceComponent implements OnInit {
  gridStyle = {
    width: '24%',
    height: '24%',
    textAlign: 'center',
    margin: '5px'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
