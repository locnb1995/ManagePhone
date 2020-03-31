import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export default class AppService {
    constructor(protected httpClient: HttpClient) {

    }

    protected findAllEntity(url: string): Promise<any> {
        return this.httpClient.get(url).toPromise();
    }
}
