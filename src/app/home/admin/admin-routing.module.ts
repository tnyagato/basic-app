import { SettingsComponent } from './settings/settings.component';
import { LogsComponent } from './logs/logs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { CreateAccountComponent } from './create-account/create-account.component';


const routes: Routes = [
  { path: "users", component: UsersComponent},
  { path: "roles", component: RolesComponent},
  { path: "create-account", component: CreateAccountComponent },
  { path: "logs", component: LogsComponent},
  { path: "settings", component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
