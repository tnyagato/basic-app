//-------------------------------------------VIEW

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DataService } from '../../../services/data.service';
import { ApiResponse } from 'tin-core';
import { Contact, Customer } from '../../../classes/Classes';
import { AuthService, MessageService } from 'tin-spa';
import { MatTableDataSource } from '@angular/material/table';
import { editContactDialog } from './editContactDialog.component';
@Component({
  selector: 'app-viewCustomer',
  templateUrl: './viewCustomerDialog.component.html',
  styleUrls: ['./customers.component.css']
})
export class viewCustomerDialog implements OnInit {

  constructor(public dataService: DataService, private authService: AuthService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {

    this.customer = this.data;
    this.isLoadComplete = true;
    this.loadContacts();
    this.myRole = this.authService.currentRoleSource.value
  }

  newContact = new Contact();

  contacts: Contact[] = [];
  customer: Customer;
  isLoadComplete: boolean = false;
  isProcessing: boolean = false;
  selectedGroupName
  myRole;

  loadContacts() {

    this.dataService.GetContact("custid", this.customer.custID).subscribe((apiResponse: ApiResponse) => {
      this.contacts = apiResponse.dt
    });

  }

  addContact() {

    this.newContact = new Contact();
    this.newContact.custID = this.customer.custID;

    const dialogRef = this.dialog.open(editContactDialog, {
      width: '900px',
      data: { contact: this.newContact, editMode: false }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'success') {
        this.loadContacts();
      }
    });

  }

  editContact(row: Contact) {

    const dialogRef = this.dialog.open(editContactDialog, {
      width: '900px',
      data: {contact:row, editMode:true}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'success') {
        this.loadContacts();
      }
    });

  }



  submit() {
    console.log("Changed")
  }

};



