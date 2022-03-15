//-------------------------------------------VIEW

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../../services/data.service';
import { ApiResponse } from 'tin-core';
import { Group } from '../../../classes/Classes';
import { MessageService } from 'tin-spa';
@Component({
selector: 'app-viewGroup',
templateUrl: './viewGroupDialog.component.html',
styleUrls: ['./groups.component.css']
})
export class viewGroupDialog implements OnInit {

constructor( @Inject(MAT_DIALOG_DATA) public data) {}

ngOnInit() {

this.group = this.data;
this.isLoadComplete = true;

}

group: Group;
isLoadComplete: boolean = false;
isProcessing: boolean = false;

submit(){}

};



