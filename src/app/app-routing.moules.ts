import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { ProductpageComponent } from './productpage/productpage.component';


const routes: Routes = [
   { path: '', component: HomepageComponent },
   { path: 'header', component: HeaderComponent },
   { path: 'accountpage', component: AccountpageComponent },
   { path: 'regpage', component: RegisterpageComponent },
   { path: 'homepage', component: HomepageComponent },
   { path: 'productpage/:card.PRODUCT_ID', component: ProductpageComponent },
   
  ]
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }