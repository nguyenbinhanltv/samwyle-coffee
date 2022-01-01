import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent implements OnInit {

  @Input('tableId') tableId!: number;
  @Input('tableName') tableName!: string;
  @Input('status') status!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
