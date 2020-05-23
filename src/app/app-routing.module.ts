import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterShopkeeperComponent } from './register-shopkeeper/register-shopkeeper.component';
import { RegisterDeliveryBoyComponent } from './register-delivery-boy/register-delivery-boy.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { ViewCartComponent } from './user/view-cart/view-cart.component';
import { StoreComponent } from './user/store/store.component';
import { UserOrderHistoryComponent } from './user/user-order-history/user-order-history.component';
import { UserOrderProductDetailsComponent } from './user/user-order-product-details/user-order-product-details.component';
import { ProfileComponent } from './user/profile/profile.component';
import { OrderItemsComponent } from './user/order-items/order-items.component';



const routes: Routes = [
  {path:'',component:LoginPageComponent},
  
  {path:'deliverysignup',component:RegisterDeliveryBoyComponent},
 {path:'usersignup',component:RegisterUserComponent},
 {path:'shopkeepersignup',component:RegisterShopkeeperComponent},
 {path:'homepage',component:UserHomeComponent},
 {path:'products',component:UserOrderProductDetailsComponent},
 {path:'history',component:UserOrderHistoryComponent},
 {path:'cart',component:ViewCartComponent},
 {path:'profile',component:ProfileComponent},
 {path:'order',component:OrderItemsComponent},
 {path:':id',component:StoreComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
