import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  height: any = 500;
  count: number = 8;
  constructor() { }

  ngOnInit(): void {
    this.createElement();
  }

  getDivHeight() {
    this.height = (parseInt(this.height) - 40) + 'px';
  }

  createDivElement(elem: any) {
    let div = document.createElement('div');
    if (this.count == 0) {
      div.innerHTML = 'Floating banner with rotating text';
    }
    this.getDivHeight();
    div.style.height = this.height;
    div.style.cssText = "border:1px solid black;padding:20px;";
    elem.appendChild(div);
    while (this.count > 0) {
      this.count--;
      this.createDivElement(div);
    }
  }

  createElement() {
    let element = <HTMLElement>document.getElementById('div');
    this.createDivElement(element);
  }
}
