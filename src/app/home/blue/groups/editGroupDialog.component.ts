//-------------------------------------------EDIT

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../../services/data.service';
import { ApiResponse } from 'tin-core';
import { Group } from '../../../classes/Classes';
import { MessageService, AuthService } from 'tin-spa';
@Component({
  selector: 'app-editGroup',
  templateUrl: './editGroupDialog.component.html',
  styleUrls: ['./groups.component.css']
})
export class editGroupDialog implements OnInit {

  constructor(private messageService: MessageService, public dataService: DataService, private authService: AuthService, private dialogRef: MatDialogRef<editGroupDialog>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {

    this.group = this.data;
    this.isLoadComplete = true;

  }

  group: Group;
  isLoadComplete: boolean = false;
  isProcessing: boolean = false;

  submit() {

    if (this.group.groupName == "") {
      this.messageService.toast("Enter Group Name")
      return;
    }


    this.isProcessing = true;
    this.dataService.UpdateGroup(this.group, "edit").subscribe((apiResponse: ApiResponse) => {
      this.isProcessing = false;

      if (apiResponse.message == "success") {
        this.messageService.toast("Group Updated");
        this.dialogRef.close("success");
      } else {
        this.messageService.toast(apiResponse.message);
      }
    });

  };
};



