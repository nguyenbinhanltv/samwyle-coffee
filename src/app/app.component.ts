import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Category } from './models/category.inteface';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  currentPage!: string;
  categories!: Category[];

  constructor(private _activatedRoute: ActivatedRoute, private router: Router, private _productService: ProductService) {
    this._activatedRoute.data.subscribe((a) => console.log(a));
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  )
      .subscribe((event) => {
        console.log(event)
         this.currentPage = (event as NavigationEnd).url;
      });

      this._productService.getCategories().subscribe(response => {
        console.log(response)
        if (response.statusCode === 200) {
          this.categories = response.data;
        }
      });
  }
}
