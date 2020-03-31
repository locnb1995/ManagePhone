import { Component, OnInit, Input } from '@angular/core';
import TableResponse from '../model/TableResponse';
import Product from '../model/Product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() tableResponse: TableResponse;
  showTable: boolean;
  listKey: Array<string>;
  data: Array<object> = [];
  constructor() { }

  ngOnInit() {
    this.showTable = this.tableResponse.data.length === 0 ? false : true;
    if (this.showTable) {
      const a = this.tableResponse.data[0];
      this.listKey = Object.keys(a);
      for (const i of this.tableResponse.data) {
        const dataArray = Object.values(i);
        this.data.push(dataArray);
      }
    }
  }

}
