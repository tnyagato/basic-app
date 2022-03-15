//-------------------------------------------ADD

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../../services/data.service';
import { ApiResponse } from 'tin-core';
import { MessageService } from 'tin-spa';
import { Group } from '../../../classes/Classes';
@Component({
  selector: 'app-addGroup',
  templateUrl: './addGroupDialog.component.html',
  styleUrls: ['./groups.component.css']
})
export class addGroupDialog implements OnInit {

  constructor(private messageService: MessageService, private dataService: DataService, private dialogRef: MatDialogRef<addGroupDialog>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  isProcessing: boolean;
  group = new Group();
  submit() {


    if (this.group.groupName == ""){
      this.messageService.toast("Enter Group Name")
      return;
    }


    this.isProcessing = true;
    this.dataService.UpdateGroup(this.group, "add").subscribe((apiResponse: ApiResponse) => {
      this.isProcessing = false;

      if (apiResponse.message == "success") {
        this.messageService.toast("Group Added");
        this.dialogRef.close("success");
      } else {
        this.messageService.toast(apiResponse.message);
      }
    });

  };
};



