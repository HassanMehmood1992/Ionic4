import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';
import { FirstPage } from '../first/first.page';
import { SecondPage } from '../second/second.page';

const routes: Routes = [
  {
    path:'menu',
    component: MenuPage,
    children:[
      {
        path:'first',
        loadChildren:'../first/first.module#FirstPageModule'
      },
      {
        path:'second',
        loadChildren:'../second/second.module#SecondPageModule'
      },
    ]
  },
  {
    path:'',
    redirectTo:'main/menu/first'
  }
]
@NgModule({
  
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
