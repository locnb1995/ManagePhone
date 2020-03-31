import Product from './Product';
import Customer from './Customer';

export default class Order {
    id: string;
    product: Product;
    total: number;
    // tslint:disable-next-line: variable-name
    total_price: number;
    customer: Customer;
    process: any;
    // tslint:disable-next-line: variable-name
    creation_date: Date;
    // tslint:disable-next-line: variable-name
    done_date: Date;
}
