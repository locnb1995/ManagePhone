import { Component, OnInit } from '@angular/core';
import ProductService from '../services/entity_service/ProductService';
import TableResponse from '../model/TableResponse';
import * as RestStatus from '../model/ResponseStatus';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  entityData: TableResponse;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.findAll().then((res: TableResponse) => {
      if (res.status === RestStatus.SUCCESS) {
        this.entityData = res;
      } else {
        // TODO
      }
    })
      .catch(err => console.log(err));
  }

}
