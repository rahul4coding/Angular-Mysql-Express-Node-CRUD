import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {mysqlComponent} from './components/mysql.component';
import {fetchService} from './services/fetch.service';
import {insertService} from './services/insert.service';
import {updateService} from './services/update.service';
import {deleteService} from './services/delete.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,mysqlComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [fetchService, insertService,updateService,deleteService],
  bootstrap: [mysqlComponent]
})
export class AppModule { }
