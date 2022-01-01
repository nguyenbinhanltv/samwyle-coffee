import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzMessageService } from 'ng-zorro-antd/message';
import { forkJoin, Subscription } from 'rxjs';
import { Order, OrderLine, OrderStatus } from 'src/app/models/order.inteerface';
import { Product } from 'src/app/models/product.interface';
import { Table } from 'src/app/models/table.interface';
import { CommonService } from 'src/app/services/common.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProductService } from 'src/app/services/product.service';
import { TableService } from 'src/app/services/table.service';

export interface Data {
  id: number;
  name: string;
  age: number;
  address: string;
  disabled: boolean;
}

@Component({
  selector: 'app-invoice-manager',
  templateUrl: './invoice-manager.component.html',
  styleUrls: ['./invoice-manager.component.scss']
})
export class InvoiceManagerComponent implements OnInit {
  tabs = [1, 2, 3];

  isVisible: boolean = false;

  listOfData: Order[] = [];
  listOfCurrentPageData: Order[] = [];
  expandSet = new Set<number>();

  products: Product[] = [];
  tables: Table[] = [];

  current = 0;
  disable = false;
  validateForm!: FormGroup;
  status!: Array<{ name: string, status: OrderStatus }>;

  listOfSelectedValue: Product[] = [];
  orderLine: OrderLine[] = [];

  constructor(
    private fb: FormBuilder,
    private _invoiceService: InvoiceService,
    private _commonService: CommonService,
    public _productService: ProductService,
    private message: NzMessageService,
    private _tableService: TableService
  ) {
  }

  ngOnInit(): void {
    this.initPage();

    this.status = [
      {
        name: 'Đã thanh toán',
        status: OrderStatus.PAID
      },
      {
        name: 'Chưa thanh toán',
        status: OrderStatus.STAFF
      },
      {
        name: 'Chờ thanh toán',
        status: OrderStatus.DOING
      },
    ];

    this.validateForm = this.fb.group({
      status: ['', [Validators.required]],
      tax: [10, [Validators.required]],
      table_id: [0, [Validators.required]],
      order_line: [[], [Validators.required]],
      total: [0, [Validators.required]],
    });
  }

  onIndexChange(index: number): void {
    this.current = index;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.submitForm(this.validateForm.value);
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  initPage(): Subscription {

    this._commonService.attachSpinner();
    return forkJoin({
      orders: this._invoiceService.getAllOrder(),
      products: this._productService.getProducts(),
      tables: this._tableService.getTables()
    }).subscribe(response => {
      if (response.products.statusCode === 200) {
        this.products = response.products.data as Product[];
      }

      if (response.orders.statusCode === 200) {
        this.listOfData = response.orders.data as Order[];
      }

      if (response.tables.statusCode === 200) {
        this.tables = response.tables.data as Table[];
      }

      this._commonService.detachSpinner();
    });
  }

  submitForm(value: Order): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    let total = 0;
    for (const [index, value] of this.orderLine.entries()) {
      this.orderLine[index].amount = value.price * value.quantity;
      total += value.price * value.quantity;
    }

    value.order_line = this.orderLine;
    value.total = total;

    this._invoiceService.createOrder(value).subscribe(response => {
      if (response.statusCode === 201) {
        this.message.success('Tạo hóa đơn thành công');
        this.handleCancel();
      } else {
        this.message.error('Tạo hóa đơn thất bại');
      }
    });
    console.log(value);
  }

  onListProductChange($event: Product[]) {
    this.orderLine = [];
    for (let prod of $event) {
      this.orderLine.push({
        product_id: prod.id,
        quantity: 0,
        price: prod.price,
        amount: 0,
      });
    }
  }
}
