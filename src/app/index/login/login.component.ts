import { Component, OnInit } from '@angular/core';
import { loginConfig } from 'tin-spa';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.config.appName = "Basic App"
    this.config.logo = "./assets/icon.png"

  }

  config = new loginConfig();


}
