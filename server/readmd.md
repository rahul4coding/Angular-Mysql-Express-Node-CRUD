//step-5 strat the node server

cd preSer10

cd server

node server



step 6:-

test the following rest api;s by postman

http://localhost:8082/fetch  (Get)

http://localhost:8082/insert  (post)

http://localhost:8082/update  (put)

http://localhost:8082/delete  (del)



step-7 

Create the custom services
*******************************************
preSer10
        src
             app   
                services
                    fetch.service.ts
                    insert.service.ts
                    update.service.ts
                    delete.service.ts
**********************************************
                    



<table border="1" cellpadding="10px" cellspacing="10px" align="center" style="font-size:30px">

    <thead style="background-color:gray">
        <tr>
            <th>P_ID</th>
            <th>P_NAME</th>
            <th>P_COST</th>
        </tr>

    </thead>
    
    <tbody>
        <tr *ngFor="let x of products">
            <td>{{x.p_id}}</td>
            <td>{{x.p_name}}</td>
            <td>{{x.p_cost}}</td>
        </tr>
    </tbody>
   
    
</table>
<br><br>


<hr style="height:2px;background-color: fuchsia;" >
<label >P_ID</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
<input type="number"  [(ngModel)]="insertID" >
<br><br>
<label >P_NAME</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
<input type="text"  [(ngModel)]="insertNAME" >
<br><br>
<label >P_COST</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
<input type="number" [(ngModel)]="insertCOST"  >
<br><br>
<button type="submit" click()="insert({'p_id':insertID, 'p_name':'insertNAME','p_cost':insertCOST})">Insert</button>
<br><br>
<h1>{{insertStatus | json}}</h1>
<br><br>





<hr style="height:2px;background-color: fuchsia" >
<label >P_ID</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
<input type="number"  [(ngModel)]="updateID" >
<br><br>
<label >P_NAME</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
<input type="text"  [(ngModel)]="updateNAME" >
<br><br>
<label >P_COST</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
<input type="number" [(ngModel)]="updateCOST"  >
<br><br>
<!-- <button click()="update({'p_id':updateID, 'p_name':updateNAME,'p_cost':updateCOST})">Update</button> -->
<br><br>
<h1>{{updateStatus | json}}</h1>
<br><br>


<hr style="height:2px;background-color: fuchsia" >
<label >P_ID</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
<input type="number"  [(ngModel)]="deleteID" >
<br><br>

<button click()="remove({'p_id':deleteID})">Delete</button>
<!-- <button click()="remove({'p_id':deleteID, 'p_name':deleteNAME,'p_cost':deleteCOST})">Delete</button> -->
<br><br>
<h1>{{deleteStatus | json}}</h1>




