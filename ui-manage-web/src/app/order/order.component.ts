import { Component, OnInit } from '@angular/core';
import TableResponse from '../model/TableResponse';
import OrderService from '../services/entity_service/OrderService';
import Order from '../model/Order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  entityData: TableResponse;
  listOrder: Array<Order>;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.findAll().then((res: TableResponse) => {
      this.listOrder = res.data;
    }).catch(err => {
      // TODO
    });
  }

}
