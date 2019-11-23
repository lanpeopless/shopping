import { environment } from 'src/environments/environment.prod';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../domain';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  constructor() {}

  ngOnInit() {
    this.product.buyerAvatars.forEach(e => {
      e = environment.baseHref.substring(0, environment.baseHref.length-1) + e
    })
  }
}
