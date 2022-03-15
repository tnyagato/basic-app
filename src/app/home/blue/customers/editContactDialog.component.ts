//-------------------------------------------EDIT

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../../services/data.service';
import { ApiResponse, Core } from 'tin-core';
import { Contact } from '../../../classes/Classes';
import { MessageService, AuthService } from 'tin-spa';
import { SEMICOLON } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-editContact',
  templateUrl: './editContactDialog.component.html',
  styleUrls: ['./customers.component.css']
})
export class editContactDialog implements OnInit {

  constructor(private messageService: MessageService, public dataService: DataService, private authService: AuthService, private dialogRef: MatDialogRef<editContactDialog>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {

    this.contact = this.data.contact;
    this.editMode = this.data.editMode;
    this.isLoadComplete = true;



    if (this.contact.contactEmail.length > 0){
      this.emails = this.contact.contactEmail.split(";");
    }

    if (this.contact.contactPhone.length > 0) {
      this.phones = this.contact.contactPhone.split(";");
    }


    this.loadGroups();
    this.myRole = this.authService.currentRoleSource.value

  }

  contact: Contact;
  isLoadComplete: boolean = false;
  isProcessing: boolean = false;
  editMode;
  groups;
  myRole;

  loadGroups() {


    this.dataService.GetGroup("new", this.contact.custID).subscribe((apiResponse: ApiResponse) => {
      this.groups = apiResponse.dt;
      console.log(this.groups)
    });

  }

  readonly separatorKeysCodes: number[] = [SEMICOLON];
  emails: string[] = [];

  addEmail(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if (!Core.emailIsValid(value) && value != ""){

      this.messageService.toast(`Invalid Email - ${value}`)
      return;
    }

    // Add our email
    if ((value || '').trim()) {

      if (value.includes(";")) {
        let vals = value.split(";")
        for (var val of vals) {
          this.emails.push(val.trim());
        }
      } else {
        this.emails.push(value.trim());
      }

    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeEmail(email: string): void {
    const index = this.emails.indexOf(email);

    if (index >= 0) {
      this.emails.splice(index, 1);
    }
  }



  phones: string[] = [];

  addPhone(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // if (!Core.emailIsValid(value) && value != "") {

    //   this.messageService.toast(`Invalid Phone Number - ${value}`)
    //   return;
    // }

    // Add our phone
    if ((value || '').trim()) {

      if (value.includes(";")) {
        let vals = value.split(";")
        for (var val of vals) {
          this.phones.push(val.trim());
        }
      } else {
        this.phones.push(value.trim());
      }

    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removePhone(phone: string): void {
    const index = this.phones.indexOf(phone);

    if (index >= 0) {
      this.phones.splice(index, 1);
    }
  }

  // validatePhone(phone: string){

  //   phone = phone.replace("+","")

  //   phone = phone.replace(" ", "")

  //   if(phone.startsWith("263")){
  //     phone = phone.replace("263", "")
  //   }



  // }




  submit() {

    if (this.emails.length > 0) {
      this.contact.contactEmail = "";
      let count = 0
      for (var email of this.emails) {
        count += 1;
        this.contact.contactEmail += email
        if (count < this.emails.length) {
          this.contact.contactEmail += ";"
        }
      }
    }

    if (this.phones.length > 0) {
      this.contact.contactPhone = "";
      let count = 0
      for (var email of this.phones) {
        count += 1;
        this.contact.contactPhone += email
        if (count < this.phones.length) {
          this.contact.contactPhone += ";"
        }
      }
    }




    if (this.contact.groupID == ""){
      this.messageService.toast("Please select group")
      return;
    }

    if (this.contact.contactEmail == "") {
      this.messageService.toast("Please enter email")
      return;
    }

    let m;
    if (this.editMode){
      m = "edit";
    }else{
      m = "add";
    }

    this.isProcessing = true;
    this.dataService.UpdateContact(this.contact, m).subscribe((apiResponse: ApiResponse) => {
      this.isProcessing = false;

      if (apiResponse.message == "success") {
        this.messageService.toast("Details Updated");
        this.dialogRef.close("success");
      } else {
        this.messageService.toast(apiResponse.message);
      }
    });

  };
};



