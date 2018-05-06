import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { MenuComponent } from './core/menu/menu.component';
import { UserService } from './service/user.service';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { VendorService } from './service/vendor.service';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { ProductService } from './service/product.service';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { PurchaseRequestService } from './service/purchaserequest.service';
import { PurchaseRequestListComponent } from './feature/purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaseRequestCreateComponent } from './feature/purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaseRequestEditComponent } from './feature/purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaseRequestDetailComponent } from './feature/purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { SystemService } from './service/system.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    MenuComponent,
    UserListComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserLoginComponent,
    VendorListComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    PurchaseRequestListComponent,
    PurchaseRequestCreateComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    VendorService,
    ProductService,
    PurchaseRequestService,
    SystemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
