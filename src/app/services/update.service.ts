import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()

export class updateService {
    constructor(private _http: HttpClient) { }
    public updateProducts(obj: any): any {
        return this._http.post('http://localhost:8082/update', obj);
    };
};