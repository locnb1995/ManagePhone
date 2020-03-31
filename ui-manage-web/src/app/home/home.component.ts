import { Component, OnInit, ViewChild } from '@angular/core';
import ProductService from '../services/entity_service/ProductService';
import OrderService from '../services/entity_service/OrderService';
import CustomerService from '../services/entity_service/CustomerService';
import AdminService from '../services/entity_service/AdminService';
import TableResponse from '../model/TableResponse';
import * as RestStatus from '../model/ResponseStatus';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tableResponse: TableResponse;
  title: string;
  constructor(private productService: ProductService,
              private orderService: OrderService,
              private customerService: CustomerService,
              private adminService: AdminService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.findAll().then((res: TableResponse) => {
      this.title = 'Products';
      if (res.status === RestStatus.SUCCESS) {
        this.tableResponse = res;
      } else {
        // TODO
      }
    })
      .catch(err => console.log(err));
  }

  getAllOrders() {
    this.orderService.findAll().then((res: TableResponse) => {
      this.title = 'Orders';
      const convertData = [];
      for (const item of res.data) {
        const convertItem = {
          id: item.id,
          product: item.product.name,
          total: item.total,
          total_price: item.total_price,
          customer_name: item.customer.username,
          customer_phone: item.customer.phone,
          customer_address: item.customer.address,
          process: item.process.name,
          creation_date : item.creation_date,
          done_date : item.done_date
        };
        convertData.push(convertItem);
      }
      res.data = convertData;
      this.tableResponse = res;
    }).catch(err => {
      // TODO
    });
  }

  getAllCustomers() {
    this.customerService.findAll().then((res: TableResponse) => {
      this.title = 'Customers';
      if (res.status === RestStatus.SUCCESS) {
        this.tableResponse = res;
      } else {
        // TODO
      }
    })
      .catch(err => console.log(err));
  }

  getAllAdmin() {
    this.adminService.findAll().then((res: TableResponse) => {
      this.title = 'Admins';
      const convertData = [];
      for (const item of res.data) {
        const convertItem = {
          id: item.id,
          username: item.username,
          password: item.password,
          role: item.adminRole.name
        };
        convertData.push(convertItem);
      }
      res.data = convertData;
      this.tableResponse = res;
    }).catch(err => {
      // TODO
    });
  }

  onChangeContent(content: number) {
    switch (content) {
      case 1:
        this.getAllProducts();
        break;
      case 2:
        this.getAllOrders();
        break;
      case 3:
        this.getAllCustomers();
        break;
      case 4:
        this.getAllAdmin();
        break;
      default:
        this.getAllProducts();
        break;
    }
  }

}
