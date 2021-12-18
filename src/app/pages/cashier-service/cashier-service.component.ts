import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashier-service',
  templateUrl: './cashier-service.component.html',
  styleUrls: ['./cashier-service.component.scss']
})
export class CashierServiceComponent implements OnInit {
  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
