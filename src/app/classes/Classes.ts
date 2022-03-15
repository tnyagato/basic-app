import { Core } from 'tin-core';


export class Group {

  constructor() {
    this.groupID = "";
    this.groupName = "";
    this.createdDate = "";
    this.createdBy = "";
    this.updatedDate = "";
    this.updatedBy = "";
  }

  groupID: string;
  groupName: string;
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
}

export class Customer {

  constructor() {
    this.custID = "";
    this.custName = "";
    this.custCIF = "";
  }

  custID: string;
  custName: string;
  custCIF: string;
}

export class Contact {

  constructor() {
    this.contactID = "";
    this.groupID = "";
    this.custID = "";
    this.contactEmail = "";
    this.contactPhone = "";
  }

  contactID: string;
  groupID: string;
  custID: string;
  contactEmail: string;
  contactPhone: string;

  groupName

}





