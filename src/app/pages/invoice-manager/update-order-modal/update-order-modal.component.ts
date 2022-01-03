import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { forkJoin, Subscription } from 'rxjs';
import { Order, OrderLine, OrderStatus } from 'src/app/models/order.inteerface';
import { Product } from 'src/app/models/product.interface';
import { Table } from 'src/app/models/table.interface';
import { CommonService } from 'src/app/services/common.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProductService } from 'src/app/services/product.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-update-order-modal',
  templateUrl: './update-order-modal.component.html',
  styleUrls: ['./update-order-modal.component.scss']
})
export class UpdateOrderModalComponent implements OnInit {
  products: Product[] = [];
  tables: Table[] = [];

  current = 0;
  disable = false;
  validateForm!: FormGroup;
  status!: Array<{ name: string, status: OrderStatus }>;

  listOfSelectedValue: Product[] = [];
  orderLine: OrderLine[] = [];

  order!: Order;

  constructor(
    private _invoiceService: InvoiceService,
    private _commonService: CommonService,
    public _productService: ProductService,
    private message: NzMessageService,
    private _tableService: TableService,
    private modal: NzModalRef,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
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

    this.initPage();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._commonService.detachSpinner();
  }

  destroyModal(): void {
    this.modal.destroy();
  }

  onIndexChange(index: number): void {
    this.current = index;
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

    this._invoiceService.updateOrder(value).subscribe(response => {
      if (response.statusCode === 200) {
        this.message.success('Cật nhật hóa đơn thành công');
      } else {
        this.message.error('Cật nhật hóa đơn thất bại');
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

    this.order.order_line = this.orderLine;
    this.order.total = total;

    this.validateForm.value.order_line = this.orderLine;
    this.validateForm.value.total = total;
  }

  initPage(): Subscription {

    this._commonService.attachSpinner();
    return forkJoin({
      products: this._productService.getProducts(),
      tables: this._tableService.getTables()
    }).subscribe(response => {
      if (response.products.statusCode === 200) {
        this.products = response.products.data as Product[];
        this.order = this._invoiceService.currentOrderCanUpdate;
        this.orderLine = this.order.order_line;
        for (const ord of this.order.order_line) {
          this.listOfSelectedValue.push(this.products.find(prod => prod.id === ord.product_id) as Product);
        }
      }

      if (response.tables.statusCode === 200) {
        this.tables = response.tables.data as Table[];
      }

      this._commonService.detachSpinner();
    });
  }

  findProduct(products: Product[], productId: number): Product {
    return products.find(product => product.id === productId) as Product;
  }

}
