import { HttpService } from 'tin-core';
import { Injectable } from '@angular/core';
import { CapItem, AppConfig } from 'tin-spa';
import { Group } from '../classes/Classes';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpService: HttpService) {

    //API URL
    let url = new URL(window.location.href);

    if (url.host.includes('localhost')) {
      httpService.apiUrl = "https://localhost:44380/";
    } else {
      httpService.apiUrl = `${url.protocol}//${url.host}/api/`;
    }


    //Role Capabilities

    this.appConfig.appName = "Basic App";
    this.appConfig.logo = "./assets/icon.png"
    this.appConfig.ADAuth = false;
    this.appConfig.capItems = [this.capAdmin, this.capGroups, this.capHome, this.capContact_add, this.capContact_edit, this.capContact_delete];

    this.capHome.name = "cap1";
    this.capHome.display = "Home";
    this.capHome.link = "home";

    this.capAdmin.name = "cap2";
    this.capAdmin.display = "Admin";
    this.capAdmin.capSubItems = [this.capUsers, this.capRoles, this.capLogs, this.capSettings];

    this.capUsers.name = "cap3";
    this.capUsers.display = "Users";
    this.capUsers.link = "home/admin/users";

    this.capRoles.name = "cap4"
    this.capRoles.display = "Roles";
    this.capRoles.link = "home/admin/roles";

    this.capLogs.name = "cap5"
    this.capLogs.display = "Logs";
    this.capLogs.link = "home/admin/logs";

    this.capSettings.name = "cap6"
    this.capSettings.display = "Settings";
    this.capSettings.link = "home/admin/settings";



    // Specific Capabilities
    this.capGroups.name = "cap10"
    this.capGroups.display = "Groups";
    this.capGroups.link = "home/groups";


  }

  appConfig = new AppConfig();

  // caps: CapItem[];
  capHome = new CapItem;
  capAdmin = new CapItem;
  capUsers = new CapItem;
  capRoles = new CapItem;
  capLogs = new CapItem;
  capSettings = new CapItem;


  capGroups = new CapItem;
  capContact_add = new CapItem;
  capContact_edit = new CapItem;
  capContact_delete = new CapItem;

  // Groups
  UpdateGroup(group: Group, action: string) {
    return this.httpService.Post('Groups/UpdateGroup?action=' + action, group);
  }


  GetGroup(by: string, val: string) {
    return this.httpService.Get('Groups/GetGroup?by=' + by + '&val=' + val);
  }



}
