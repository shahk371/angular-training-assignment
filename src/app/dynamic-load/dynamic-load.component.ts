import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dynamic-load',
  templateUrl: './dynamic-load.component.html',
  styleUrls: ['./dynamic-load.component.css']
})
export class DynamicLoadComponent implements OnInit {

  count: number = 5;
  btnCount: any;

  constructor() { }

  ngOnInit(): void {
    this.createElement();
  }

  @HostListener('window:scroll', []) 
    scrollHandler() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.createDynamicElement();
        this.btnCount += 1;
      } else {
        console.log('dded')
      }
    }
  

  createDynamicElement() {
    let divElem = <HTMLElement>document.getElementById('div');
    let elem = document.createElement('div');
    elem.id = 'div_' + this.btnCount;
    elem.style.cssText = 'display: flex;justify-content: center;align-items: center;height: 200px;width: 200px;border: 3px solid green;';
    let btnElem = document.createElement('button');
    btnElem.innerHTML = 'Button';
    elem.appendChild(btnElem);
    btnElem.onclick = (evt: any) => {
      let val = evt.target.parentNode.id.split('_');
      alert('Button ' + val[1] + ' is clicked');
    }
    divElem.appendChild(elem);
  }

  createElement() {
    for(this.btnCount = 1; this.btnCount < this.count; this.btnCount++) {
      this.createDynamicElement();
    }
  };

}
