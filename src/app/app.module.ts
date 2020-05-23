import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterShopkeeperComponent } from './register-shopkeeper/register-shopkeeper.component';
import { RegisterDeliveryBoyComponent } from './register-delivery-boy/register-delivery-boy.component';
import { AdminComponent } from './admin/admin.component';
import { ShopkeeperComponent } from './shopkeeper/shopkeeper.component';
import { UserComponent } from './user/user.component';
import { DeliveryBoyComponent } from './delivery-boy/delivery-boy.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { ViewCartComponent } from './user/view-cart/view-cart.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserSidebarComponent } from './user/user-sidebar/user-sidebar.component';
import { StoreComponent } from './user/store/store.component';
import { UserOrderHistoryComponent } from './user/user-order-history/user-order-history.component';
import { UserOrderProductDetailsComponent } from './user/user-order-product-details/user-order-product-details.component';
import { ProfileComponent } from './user/profile/profile.component';
import { OrderItemsComponent } from './user/order-items/order-items.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterUserComponent,
    RegisterShopkeeperComponent,
    RegisterDeliveryBoyComponent,
    AdminComponent,
    DropdownDirective,
    ShopkeeperComponent,
    UserComponent,
    DeliveryBoyComponent,
    UserHeaderComponent,
    ViewCartComponent,
    UserHomeComponent,
    UserSidebarComponent,
    StoreComponent,
    UserOrderHistoryComponent,
    UserOrderProductDetailsComponent,
    ProfileComponent,
    OrderItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
