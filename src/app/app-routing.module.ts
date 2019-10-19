import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderComponent } from './components/calender/calender.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
const routes: Routes = [
  {
    path: '', component: SignInComponent
  },
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule',


  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
