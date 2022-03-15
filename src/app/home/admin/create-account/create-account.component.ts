import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  appConfig = this.dataService.appConfig;

}
