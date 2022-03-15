//----------------------------LIST

import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { MessageService } from 'tin-spa';
import { ApiResponse } from 'tin-core';
import { Group } from '../../../classes/Classes';
import { viewGroupDialog } from './viewGroupDialog.component';
import { addGroupDialog } from './addGroupDialog.component';
import { editGroupDialog } from './editGroupDialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(private messageService: MessageService, private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadGroups();
  }

  @ViewChild('tablePaginator') tablePaginator: MatPaginator;
  groups;
  displayedColumns: string[] = ['groupName', 'updatedDate', 'updatedBy', 'Action'];

  loadGroups() {

    this.dataService.GetGroup("all", "").subscribe((apiResponse: ApiResponse) => {
      this.groups = new MatTableDataSource(apiResponse.dt);
      this.groups.paginator = this.tablePaginator;
      this.applyFilter(this._filterText);
    });

  }

  _filterText = "";
  applyFilter(filterValue: string) {
    this.groups.filter = filterValue.trim().toLowerCase();
  }

  addGroup() {

    const dialogRef = this.dialog.open(addGroupDialog, {
      width: '500px',
      data: ""
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'success') {
        this.loadGroups();
      }
    });

  }


  viewGroup(row: Group) {

    const dialogRef = this.dialog.open(viewGroupDialog, {
      width: '500px',
      data: row
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'success') {
        this.loadGroups();
      }
    });

  }


  editGroup(row: Group) {

    const dialogRef = this.dialog.open(editGroupDialog, {
      width: '500px',
      data: row
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'success') {
        this.loadGroups();
      }
    });

  }


  deleteGroup(row: Group) {

    this.messageService.confirm(`DELETE ${row.groupName} ?`).subscribe((result) => {
      if (result == "yes") {
        this.dataService.UpdateGroup(row, "delete").subscribe((apiResponse: ApiResponse) => {

          if (apiResponse.message == "success") {
            this.messageService.toast("Group Deleted");
            this.loadGroups();
          } else {
            this.messageService.toast(apiResponse.message);
          }
        });

      };
    });

  }
}



