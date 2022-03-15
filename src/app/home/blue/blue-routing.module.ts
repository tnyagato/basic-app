import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { DirectoryComponent } from './directory/directory.component';
import { GroupsComponent } from './groups/groups.component';



const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'directory', component: DirectoryComponent },
  { path: 'groups', component: GroupsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlueRoutingModule { }
