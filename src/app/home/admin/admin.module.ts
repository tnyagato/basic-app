import {SpaAdminModule } from 'tin-spa';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { LogsComponent } from './logs/logs.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [CreateAccountComponent, ProfilesComponent, RolesComponent, UsersComponent, LogsComponent, SettingsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SpaAdminModule
  ]
})
export class AdminModule { }
