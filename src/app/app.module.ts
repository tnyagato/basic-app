import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { TinSpaModule } from "tin-spa";

import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup

import { MomentModule } from 'angular2-moment';  // optional, provides moment-style pipes for date formatting


@NgModule({
  declarations: [
    AppComponent,

  ],

  entryComponents: [

  ],

  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TinSpaModule,

    MomentModule,
    NgIdleKeepaliveModule.forRoot()

  ],

  providers: [


  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
