import { Component, OnInit } from '@angular/core';
import TableResponse from '../model/TableResponse';
import * as RestStatus from '../model/ResponseStatus';
import AdminService from '../services/entity_service/AdminService';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  entityData: TableResponse;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.findAll().then((res: TableResponse) => {
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
      this.entityData = res;
    }).catch(err => {
      // TODO
    });
  }

}
