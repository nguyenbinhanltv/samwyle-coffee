import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Category } from 'src/app/models/category.inteface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-for-manager',
  templateUrl: './for-manager.component.html',
  styleUrls: ['./for-manager.component.scss']
})
export class ForManagerComponent implements OnInit {

  isCollapsed = false;
  currentPage!: string;
  categories!: Category[];

  ngOnInit(): void {

  }

  constructor(private _activatedRoute: ActivatedRoute, private router: Router, private _productService: ProductService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  )
      .subscribe((event) => {
         this.currentPage = (event as NavigationEnd).url;
      });

      this._productService.getCategories().subscribe(response => {
        if (response.statusCode === 200) {
          this.categories = response.data;
        }
      });
  }

}
