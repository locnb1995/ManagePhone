import { Injectable } from '@angular/core';
import * as Config from '../../model/Config';
import AppService from '../AppService';

@Injectable()
export default class CustomerService extends AppService {
    findAll(): Promise<any> {
        return this.findAllEntity(Config.FIND_ALL_CUSTOMER);
    }
}
