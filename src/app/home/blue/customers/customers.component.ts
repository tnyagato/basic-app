//----------------------------LIST

import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { MessageService } from 'tin-spa';
import { ApiResponse, Core } from 'tin-core';
import { Customer } from '../../../classes/Classes';
import { viewCustomerDialog } from './viewCustomerDialog.component';
import { addCustomerDialog } from './addCustomerDialog.component';
import { editCustomerDialog } from './editCustomerDialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private messageService: MessageService, private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    // this.loadCustomers();
  }

  @ViewChild('tablePaginator') tablePaginator: MatPaginator;
  customer = new Customer;
  customers;
  displayedColumns: string[] = ['custName', 'custCIF', 'Action'];
  isProcessing = false

  loadCustomers() {

    if (this.customer.custName == "" && this.customer.custCIF == ""){
      this.messageService.toast("Please enter CIF or Name")
      return;
    }

    if (this.customer.custCIF == ""){

      if (this.customer.custName == "") {
        this.messageService.toast("Please enter Customer Name")
        return;
      }

      if (this.customer.custName.length <= 3) {
        this.messageService.toast("Please enter more characters for Customer Name")
        return;
      }

    }

    if (this.customer.custCIF != ""){

      if (Core.isNumber(this.customer.custCIF) && (this.customer.custCIF.startsWith("114") || this.customer.custCIF.startsWith("214")) && this.customer.custCIF.length == 11) {
        //valid
      } else {
        this.messageService.toast("Please enter a valid CIF")
        return;
      }

    }







    this.dataService.SearchCustomer(this.customer).subscribe((apiResponse: ApiResponse) => {
      this.customers = new MatTableDataSource(apiResponse.dt);
      this.customers.paginator = this.tablePaginator;
      this.applyFilter(this._filterText);
    });

  }

  _filterText = "";
  applyFilter(filterValue: string) {
    this.customers.filter = filterValue.trim().toLowerCase();
  }

  viewCustomer(row: Customer) {

    const dialogRef = this.dialog.open(viewCustomerDialog, {
      width: '1100px',
      data: row
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'success') {
        this.loadCustomers();
      }
    });

  }

}



