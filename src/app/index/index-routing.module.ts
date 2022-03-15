import { RecoverAccountComponent } from './recover-account/recover-account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

    { path: "signup", component: SignupComponent },
    { path: 'recover-account', component: RecoverAccountComponent },
    { path: 'login', component: LoginComponent },

    { path: '', redirectTo: 'login' },
    { path: '**', redirectTo: '' },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
