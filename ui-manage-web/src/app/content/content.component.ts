import { Component, OnInit, Input } from '@angular/core';
import TableResponse from '../model/TableResponse';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() title: string;
  private response: TableResponse;
  @Input()
  set tableResponse(tableResponse: TableResponse) {
    this.response = tableResponse;
    this.changeContentTable();
  }

  get tableResponse(): TableResponse { return this.response; }
  showTable: boolean;
  listKey = new Array<any>();
  data = new Array<any>();
  constructor() { }

  ngOnInit() {

  }

  changeContentTable() {
    this.data = [];
    this.showTable = this.response.data.length === 0 ? false : true;
    if (this.showTable) {
      const a = this.response.data[0];
      this.listKey = Object.keys(a);
      for (const i of this.tableResponse.data) {
        const dataArray = Object.values(i);
        this.data.push(dataArray);
      }
    }
  }



}
