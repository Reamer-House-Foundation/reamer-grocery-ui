import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
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
    path: 'item/:itemName',
    component: GroceryListItemComponent,
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
      FontAwesomeModule,
      RouterModule.forRoot(appRoutes)
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
    { provide: APP_BASE_HREF, useValue: environment.baseRef },
    AuthService,
    InventoryService,
    NewItemCartService,
    AuthGuardService
  ]
})
export class AppModule { }
