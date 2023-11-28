import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { MainComponent } from '../main/main.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
