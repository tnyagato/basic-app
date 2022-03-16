import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TinSpaModule } from 'tin-spa';

import { BlueRoutingModule } from './blue-routing.module';
import { GroupsComponent } from './groups/groups.component';
import { addGroupDialog } from './groups/addGroupDialog.component';
import { viewGroupDialog } from './groups/viewGroupDialog.component';
import { editGroupDialog } from './groups/editGroupDialog.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [ GroupsComponent, addGroupDialog,viewGroupDialog, editGroupDialog,
  CustomersComponent],
  imports: [
    CommonModule,
    BlueRoutingModule,
    TinSpaModule

  ]
})
export class BlueModule { }
