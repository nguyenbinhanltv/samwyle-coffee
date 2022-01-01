import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Category } from 'src/app/models/category.inteface';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-for-manager',
  templateUrl: './for-manager.component.html',
  styleUrls: ['./for-manager.component.scss']
})
export class ForManagerComponent implements OnInit {

  isCollapsed = false;
  currentPage!: string;
  categories!: Category[];

  currentUser!: User;

  ngOnInit(): void {

  }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private router: Router, private _productService: ProductService,
    private _authService: AuthService,
    private message: NzMessageService
    ) {
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

    // if(this._authService.getToken) {
    //   this._authService.getUserInfor(this._authService.getToken).subscribe(respone => {
    //     this.currentUser = respone.data as User;
    //   });
    // }
  }

  logout(): void {
    this._authService.logout();
    this.message.success('Đăng xuất thành công');
    this.router.navigate(['dang-nhap']);
  }

}
