
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { SpaUserModule } from 'tin-spa';


@NgModule({
  declarations: [ChangePasswordComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SpaUserModule
  ]
})
export class UserModule { }
