import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()

export class insertService {
    constructor(private _http: HttpClient) { }
    public insertProducts(obj: any): any {
        return this._http.post('http://localhost:8082/insert', obj);
    };
};

// /obj is the json object
// obj contain "p_id", "p_name", "p_cost"obj 
// obj must come from component through dependency injecttion