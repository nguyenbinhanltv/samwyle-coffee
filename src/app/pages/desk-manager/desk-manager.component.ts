import { Component, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { Table } from 'src/app/models/table.interface';
import { CommonService } from 'src/app/services/common.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-desk-manager',
  templateUrl: './desk-manager.component.html',
  styleUrls: ['./desk-manager.component.scss']
})
export class DeskManagerComponent implements OnInit {

  tables: Table[] = [];

  visible = false;

  constructor(
    private _tableService: TableService,
    private _commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.initPage();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.initPage().unsubscribe();
    this._commonService.detachSpinner();
  }
  initPage(): Subscription {
    this._commonService.attachSpinner();
    return forkJoin({
      tables: this._tableService.getTables()
    }).subscribe(response => {
      if (response.tables.statusCode == 200) {
        this.tables = response.tables.data;
        this._commonService.detachSpinner();
      }
    });
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
