import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { fetchService } from '../services/fetch.service';
import { insertService } from '../services/insert.service';
import { updateService } from '../services/update.service';
import { deleteService } from '../services/delete.service';


@Component({
    selector: "crud",
    templateUrl: "./mysql.component.html"
})

export class mysqlComponent {
    products: any;
    insertStatus: any;
    updateStatus: any;
    deleteStatus: any;
    private fetchSubscribe: any;
    private insertSubscribe: any;
    private updateSubscribe: any;
    private deleteSubscribe: any;

    records: any;
    delrecords:any;



    constructor(private _fetch: fetchService,
        private _insert: insertService,
        private _update: updateService,
        private _delete: deleteService) { }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.fetchSubscribe = this._fetch.getProducts().subscribe(this._FetchCallBack, this._errorCallBack);
    };

    public _FetchCallBack = (res): any => {
        
        res.sort(this.GetSortOrder("p_id"));
        
        this.products = res;
        // this.records =res;

    }

    GetSortOrder(prop){
        return function(a,b){
            if(a[prop]>b[prop]){
                return 1;
            }else if(a[prop]<b[prop]){
                return -1;
            }
            return 0;
        }
    }

    public _errorCallBack = (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
            console.log("client side error");
        } else {
            console.log("server side error");
        }
    };
    // *************************************INSERT************************
    public insert(obj: any): any {
        this.insertSubscribe = this._insert.insertProducts(obj).subscribe(this._insertCallBack, this._errorCallBack);

        this.records = obj;
    }

    public _insertCallBack = (res): any => {
        
        //   if (this.records == "success") {
            this.insertStatus = res;    
        this.products.push(this.records);
        this.products.sort(this.GetSortOrder("p_id"));
            
            


    //  }
        








    }
    // **************************************INSERT-END**************************


    //*******************UPDATE CALLBAck********** */
    public update(obj: any): any {
        this.updateSubscribe = this._update.updateProducts(obj).subscribe(this._updateCallBack, this._errorCallBack);











    }


    public _updateCallBack = (res): any => {
        this.updateStatus = res;




    }


    // ***********************************UPDATE END********************************************




    //*************************************REMOVE (DELETE)************************** */

    public remove(obj: any): any {
        this.deleteSubscribe = this._delete.deleteProducts(obj).subscribe(this._deleteCallBack, this._errorCallBack);


        // this.delrecords=obj;


        








    }



    public _deleteCallBack = (res): any => {
        this.deleteStatus = res;
        
         
        
        
    }


    // ******************************************REMOVE END********************************************
    // ***************************************destroy component******************************
    // to avoid memory leakage we use it
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.fetchSubscribe.unsubscribe();
        this.insertSubscribe.unsubscribe();
        this.updateSubscribe.unsubscribe();
        this.deleteSubscribe.unsubscribe();

    }


} 