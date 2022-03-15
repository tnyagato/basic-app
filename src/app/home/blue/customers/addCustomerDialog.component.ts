//-------------------------------------------ADD

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../../services/data.service';
import { ApiResponse } from 'tin-core';
import { MessageService } from 'tin-spa';
import { Customer } from '../../../classes/Classes';
@Component({
selector: 'app-addCustomer',
templateUrl: './addCustomerDialog.component.html',
styleUrls: ['./customers.component.css']
})
export class addCustomerDialog implements OnInit {

constructor(private messageService: MessageService, private dataService: DataService, private dialogRef: MatDialogRef<addCustomerDialog>, @Inject(MAT_DIALOG_DATA) public data) {}

ngOnInit() {
}

isProcessing: boolean;
customer = new Customer();
submit(){


this.isProcessing = true;
this.dataService.UpdateCustomer(this.customer, "add").subscribe((apiResponse: ApiResponse) => {
this.isProcessing = false;

if (apiResponse.message == "success") {
this.messageService.toast("Customer Added");
this.dialogRef.close("success");
} else {
this.messageService.toast(apiResponse.message);
}
});

};
};



