import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Category } from 'src/app/models/category.inteface';
import { Product } from 'src/app/models/product.interface';
import { CommonService } from 'src/app/services/common.service';
import { ProductService } from 'src/app/services/product.service';

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

  categories!: Category[];
  products!: Product[];

  constructor(private _productService: ProductService, private _commonService: CommonService) { }

  ngOnInit(): void {
    this._commonService.attachSpinner();
    this.initPage();
  }

  initPage(): void {

    forkJoin({
      categories: this._productService.getCategories(),
      products: this._productService.getProducts()
    }).subscribe(response => {
      if (response.categories.statusCode === 200 && response.products.statusCode === 200) {
        this.categories = response.categories.data;
        this.products = response.products.data;
        this._commonService.detachSpinner();
      } else {
        this._commonService.detachSpinner();
      }
    });
  }

  getProductByCategory(categoryId: number, products: Product[]): Product[] {
    return products.filter(product => product.category_id.id === categoryId);
  }

}
