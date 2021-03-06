import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { forkJoin, Subscription } from 'rxjs';
import { Order, OrderLine, OrderStatus } from 'src/app/models/order.inteerface';
import { Product } from 'src/app/models/product.interface';
import { Table } from 'src/app/models/table.interface';
import { CommonService } from 'src/app/services/common.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProductService } from 'src/app/services/product.service';
import { TableService } from 'src/app/services/table.service';
import { UpdateOrderModalComponent } from './update-order-modal/update-order-modal.component';

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
    private _tableService: TableService,
    private _modalService: NzModalService
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
        status: OrderStatus.DRAFT
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

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.initPage().unsubscribe();
    this._commonService.detachSpinner();
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
      if (response.products.statusCode === 200 && response.orders.statusCode === 200 && response.tables.statusCode === 200) {
        this.products = response.products.data as Product[];
        this.listOfData = response.orders.data as Order[];
        this.tables = response.tables.data as Table[];
        this._commonService.detachSpinner();
      } else {
        localStorage.removeItem('access_token');
        this._commonService.detachSpinner();
      }
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
        this.initPage();
      } else {
        this.message.error('Tạo hóa đơn thất bại');
      }
    });
    console.log(value);
  }

  onListProductChange($event: Product[]) {
    for (const prod of $event) {
      if (!this.orderLine.find(orl => orl.product_id === prod.id)) {
        this.orderLine.push({
          product_id: prod.id,
          quantity: 0,
          price: prod.price,
          amount: 0,
        });
      }
    }

    for (const [i, value] of this.orderLine.entries()) {
      if (!$event.find(p => p.id === value.product_id)) {
        this.orderLine.splice(i, 1);
      }
    }

    let total = 0;
    for (const [index, value] of this.orderLine.entries()) {
      this.orderLine[index].amount = value.price * value.quantity;
      total += value.price * value.quantity;
    }

    this.validateForm.value.order_line = this.orderLine;
    this.validateForm.value.total = total;
    console.log(this.validateForm.value);
  }

  deleteOrder(orderId: number): Subscription {
    return this._invoiceService.deleteOrder(orderId).subscribe(response => {
      if (response.statusCode === 200) {
        this.message.success("Xóa hóa đơn thành công");
        this.initPage();
      } else {
        this.message.error("Xóa hóa đơn thất bại");
      }
    });
  }

  openUpdateOrderModal(order: Order) {
    this._invoiceService.currentOrderCanUpdate = order;
    this._modalService.create({
      nzTitle: `Cật nhật hóa đơn số ${order.id}`,
      nzContent: UpdateOrderModalComponent,
      nzWidth: '80%'
    });
  }

  findProduct(products: Product[], productId: number): Product {
    return products.find(product => product.id === productId) as Product;
  }
}
