import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { InventoryService } from './inventory.service';
import { NewItemComponent } from './new-item/new-item.component';
import { GroceryListItemComponent } from './grocery-list-item/grocery-list-item.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NewItemCartService } from './new-item-cart.service';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'inventory',
    component: GroceryListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'new',
    component: NewItemComponent,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes, {useHash: true})
    ],
  declarations: [
    AppComponent, 
    LoginComponent, 
    GroceryListComponent, 
    NewItemComponent, 
    GroceryListItemComponent,
    TopBarComponent,
    HomeComponent,
    UserDashboardComponent,
    ],
  bootstrap:    [ AppComponent ],
  providers: [
    //{ provide: APP_BASE_HREF, useValue: environment.baseRef },
    AuthService,
    InventoryService,
    NewItemCartService,
    AuthGuardService
  ]
})
export class AppModule { }
