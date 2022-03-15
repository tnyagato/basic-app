import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TinSpaModule } from 'tin-spa';

import { BlueRoutingModule } from './blue-routing.module';
import { DirectoryComponent } from './directory/directory.component';
import { GroupsComponent } from './groups/groups.component';
import { addGroupDialog } from './groups/addGroupDialog.component';
import { viewGroupDialog } from './groups/viewGroupDialog.component';
import { editGroupDialog } from './groups/editGroupDialog.component';
import { CustomersComponent } from './customers/customers.component';
import { addCustomerDialog } from './customers/addCustomerDialog.component';
import { viewCustomerDialog } from './customers/viewCustomerDialog.component';
import { editCustomerDialog } from './customers/editCustomerDialog.component';
import { editContactDialog } from './customers/editContactDialog.component';



@NgModule({
  declarations: [DirectoryComponent, GroupsComponent, addGroupDialog,viewGroupDialog, editGroupDialog,
  CustomersComponent, addCustomerDialog, viewCustomerDialog, editCustomerDialog, editContactDialog],
  imports: [
    CommonModule,
    BlueRoutingModule,
    TinSpaModule

  ]
})
export class BlueModule { }
