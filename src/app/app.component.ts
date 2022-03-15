import { HttpService } from 'tin-core';
import { DataService } from './services/data.service';
import { Component } from '@angular/core';
// import * as data from './locations.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dataService: DataService,  private httpService: HttpService){}
  ngOnInit() {
    // console.log("started")
    // console.log(data.config.header)

  }
  title = 'wallet-spa';

}
