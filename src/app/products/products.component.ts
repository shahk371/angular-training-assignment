import { Component, OnInit } from '@angular/core';
import productsData from './products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  isActive: Boolean = true;
  productsList:Array<any> = [];
  isListView: Boolean = true;
  selectedPrice:any;
  priceList = [{
    "price1": 0,
    "price2": 200,
    "label": 'Under 200'
  },
  {
    "price1": 201,
    "price2": 500,
    "label": '201-500'
  },
  {
    "price1": 501,
    "price2": Infinity,
    "label": 'Greater than 500'
  }
]

  constructor() {}

  ngOnInit(): void {
    this.productsList = JSON.parse(JSON.stringify(productsData));
  }

  getStyle() {
    return this.isListView ? '45%' : '21%';
  }

  getSelectedValue(price1: any, price2:any) {
    this.productsList = JSON.parse(JSON.stringify(productsData));
    if (this.selectedPrice != 'all') {
      this.productsList = this.productsList.filter((val:any) => {
        return val.price > price1 && val.price < price2
      });
    } 
  }
}
