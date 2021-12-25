import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  currentPage!: string;

  constructor(private _activatedRoute: ActivatedRoute, private router: Router) {
    this._activatedRoute.data.subscribe((a) => console.log(a));
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  )
      .subscribe((event) => {
         this.currentPage = (event as NavigationEnd).url;
      });
  }
}
