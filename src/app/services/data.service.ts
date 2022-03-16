import { HttpService } from 'tin-core';
import { Injectable } from '@angular/core';
import { CapItem, AppConfig } from 'tin-spa';
import { Contact, Customer, Group } from '../classes/Classes';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpService: HttpService) {

    //API URL
    let url = new URL(window.location.href);

    if (url.host.includes('localhost')) {
      httpService.apiUrl = "https://localhost:44306/";
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

    this.capContact_add.name = "cap11"
    this.capContact_add.display = "Contact Add";
    this.capContact_add.showMenu = false;

    this.capContact_edit.name = "cap12"
    this.capContact_edit.display = "Contact Edit";
    this.capContact_edit.showMenu = false;

    this.capContact_delete.name = "cap13"
    this.capContact_delete.display = "Contact Delete";
    this.capContact_delete.showMenu = false;



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
    return this.httpService.Post('Contacts/UpdateGroup?action=' + action, group);
  }


  GetGroup(by: string, val: string) {
    return this.httpService.Get('Contacts/GetGroup?by=' + by + '&val=' + val);
  }


  // Customers
  UpdateCustomer(customer: Customer, action: string) {
    return this.httpService.Post('Contacts/UpdateCustomer?action=' + action, customer);
  }


  GetCustomer(by: string, val: string) {
    return this.httpService.Get('Contacts/GetCustomer?by=' + by + '&val=' + val);
  }

  SearchCustomer(customer: Customer) {
    return this.httpService.Post('Contacts/SearchCustomer', customer);
  }

  // Contacts
  UpdateContact(contact: Contact, action: string) {
    return this.httpService.Post('Contacts/UpdateContact?action=' + action, contact);
  }


  GetContact(by: string, val: string) {
    return this.httpService.Get('Contacts/GetContact?by=' + by + '&val=' + val);
  }


}
