import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import ProductService from './services/entity_service/ProductService';
import { HttpClientModule } from '@angular/common/http';
import CustomerService from './services/entity_service/CustomerService';
import AdminService from './services/entity_service/AdminService';
import OrderService from './services/entity_service/OrderService';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService, CustomerService, AdminService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
