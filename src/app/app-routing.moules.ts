import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';

const routes: Routes = [
    { path: '', component: HomepageComponent },
   { path: 'header', component: HeaderComponent },
   { path: 'accountpage', component: AccountpageComponent },
   { path: 'regpage', component: RegisterpageComponent },
  ]
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }