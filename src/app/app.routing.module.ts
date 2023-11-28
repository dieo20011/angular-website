import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes =[
    {path: 'home', loadChildren: () => import('./home/home.module').then(m=> m.HomeModule)},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
]
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }