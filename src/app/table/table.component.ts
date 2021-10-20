import { Component, OnInit } from '@angular/core';
import tableData  from './table.json';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  cols: any = [];
  studentData: Array<any> = [];
  headers: any;

  constructor() { }

  ngOnInit(): void {
    this.studentData = JSON.parse(JSON.stringify(tableData));
    this.headers = Object.keys(this.studentData[0]);
  }

  getSortType(sortType: any) {
    return sortType = (parseInt(sortType) < 2) ? parseInt(sortType) + 1 : 0;
  }

  sortData(event: any, val: any, arr: any) {
    event.target.dataset.sorttype = this.getSortType(event.target.dataset.sorttype);
    if (parseInt(event.target.dataset.sorttype)) {
      if (event.target.dataset.sorttype == 1 && typeof(arr[val]) === 'string') {
        this.studentData.sort((a: any, b: any) => b[val].localeCompare(a[val]));
      } else if (event.target.dataset.sorttype == 2 && typeof(arr[val]) === 'string') {
        this.studentData.sort((a: any, b: any) => a[val].localeCompare(b[val]));  
      } else if (event.target.dataset.sorttype == 1 && typeof(arr[val]) === 'number') {
          this.studentData.sort((a: any, b: any) => a[val] - b[val]);
      } else {
          this.studentData.sort((a: any, b: any) => b[val] - a[val]);  
      }
    } else {
      this.studentData = JSON.parse(JSON.stringify(tableData));
    }
  }

}


