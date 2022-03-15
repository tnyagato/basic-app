import { SpaIndexModule } from 'tin-spa';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RecoverAccountComponent } from './recover-account/recover-account.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent, RecoverAccountComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SpaIndexModule
  ]
})
export class IndexModule { }
