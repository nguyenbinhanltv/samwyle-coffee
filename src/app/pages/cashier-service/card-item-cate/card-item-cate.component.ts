import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item-cate',
  templateUrl: './card-item-cate.component.html',
  styleUrls: ['./card-item-cate.component.scss']
})
export class CardItemCateComponent implements OnInit {

  @Input('title') title!: string;
  @Input('description') description!: string;
  @Input('imageUrl') imageUrl!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
