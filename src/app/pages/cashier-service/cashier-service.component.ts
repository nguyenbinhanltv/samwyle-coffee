import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Subscription } from 'rxjs';
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
  category!: string;
  products!: Product[];

  constructor(private _productService: ProductService, private _commonService: CommonService, private _activateRoute: ActivatedRoute) {
    this._activateRoute.params.subscribe(params => {
      this.category = params['category'];
      this.initPage();
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.initPage().unsubscribe();
    this._commonService.detachSpinner();
  }

  initPage(): Subscription {
    this._commonService.attachSpinner();

    return forkJoin({
      categories: this._productService.getCategories(),
      products: this._productService.getProducts(),
    }).subscribe(response => {
      if (response.categories.statusCode === 200 && response.products.statusCode === 200) {

        if (this.category) {
          this.categories = (response.categories.data as Category[]).filter(c => c.path == this.category);
          this.products = this.getProductByCategoryPath(this.category, response.products.data);
        } else {
          this.categories = response.categories.data;
          this.products = response.products.data as Product[];
        }
        this._commonService.detachSpinner();
      } else {
        this._commonService.detachSpinner();
      }
    });
  }

  getProductByCategoryPath(categoryPath: string, products: Product[]): Product[] {
    return products.filter(product => product.category_id.path === categoryPath);
  }

  getProductByCategory(categoryId: number, products: Product[]): Product[] {
    return products.filter(product => product.category_id.id === categoryId);
  }

}
