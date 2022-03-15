import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'tin-spa';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private dataService: DataService) { }

  ngOnInit() {

    this.authService.isAuthorised(this.dataService.capUsers.name);

  }



}
