import { Component, OnInit } from '@angular/core';
import {
  NZ_CAROUSEL_CUSTOM_STRATEGIES
} from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  array = [1, 2, 3, 4];

  constructor() { }

  ngOnInit(): void {
  }

}
