import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {RegisterComponent} from './pages/register/register.component';
import {AboutComponent} from './pages/about/about.component';

const paths:Route[] = [
  {path:'signin',component:SignInComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'signin',pathMatch:'full'}
];


@NgModule({
  imports: [
    RouterModule.forRoot(paths)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
