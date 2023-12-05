import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register.routing.module';
import { RegisterComponent } from './register.component';
import { RouterLinkActive, RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLinkActive,
    RouterModule,
    RegisterRoutingModule,
  ],
  providers: [],
  bootstrap: [],
})
export class RegisterModule {}
