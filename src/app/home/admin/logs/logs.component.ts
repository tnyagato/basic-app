import { Component, OnInit } from '@angular/core';
import { AuthService } from 'tin-spa';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  constructor(private authService: AuthService, private dataService: DataService) { }

  ngOnInit(): void {

    this.authService.isAuthorised(this.dataService.capLogs.name);
  }

}
