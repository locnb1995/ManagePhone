import { Component, OnInit } from '@angular/core';
import CustomerService from '../services/entity_service/CustomerService';
import TableResponse from '../model/TableResponse';
import * as RestStatus from '../model/ResponseStatus';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  entityData: TableResponse;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.findAll().then((res: TableResponse) => {
      if (res.status === RestStatus.SUCCESS) {
        this.entityData = res;
      } else {
        // TODO
      }
    })
      .catch(err => console.log(err));
  }

}
