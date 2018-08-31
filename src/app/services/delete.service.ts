import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()

export class deleteService {
    constructor(private _http: HttpClient) { }
    public deleteProducts(obj:any): any {
        return this._http.post('http://localhost:8082/delete', obj);
    };
};