//-------------------------------------------EDIT

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,  MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../../services/data.service';
import { ApiResponse } from 'tin-core';
import { Customer } from '../../../classes/Classes';
import { MessageService, AuthService } from 'tin-spa';
@Component({
selector: 'app-editCustomer',
templateUrl: './editCustomerDialog.component.html',
styleUrls: ['./customers.component.css']
})
export class editCustomerDialog implements OnInit {

constructor(private messageService: MessageService, public dataService: DataService, private authService: AuthService, private dialogRef: MatDialogRef<editCustomerDialog>, @Inject(MAT_DIALOG_DATA) public data) {}

ngOnInit() {

this.customer = this.data;
this.isLoadComplete = true;

}

customer: Customer;
isLoadComplete: boolean = false;
isProcessing: boolean = false;

submit(){


this.isProcessing = true;
this.dataService.UpdateCustomer(this.customer, "edit").subscribe((apiResponse: ApiResponse) => {
this.isProcessing = false;

if (apiResponse.message == "success") {
this.messageService.toast("Customer Updated");
this.dialogRef.close("success");
} else {
this.messageService.toast(apiResponse.message);
}
});

};
};



