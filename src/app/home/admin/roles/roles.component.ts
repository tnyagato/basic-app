import { Component, OnInit } from '@angular/core';
import { AuthService } from 'tin-spa';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(private authService:AuthService, public dataService: DataService) { }

  ngOnInit() {

    this.authService.isAuthorised(this.dataService.capRoles.name);

  }

}
