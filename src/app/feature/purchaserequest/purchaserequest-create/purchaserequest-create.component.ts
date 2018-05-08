import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { UserService } from '../../../service/user.service';
import { SystemService } from '../../../service/system.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { User } from '../../../model/user';
import { PurchaseRequestListComponent } from '../purchaserequest-list/purchaserequest-list.component';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {

	title: string = 'Purchase Request Create';

	resp: any;

	purchaseRequest: PurchaseRequest = new PurchaseRequest();

	authenticatedUser: User;

	create() {
		console.log(this.purchaseRequest);
		this.prSvc.create(this.purchaseRequest)
			.subscribe(resp => {
				this.resp = resp;
				this.router.navigate(['/purchaserequest/list']);
			});
	}

  	constructor(private prSvc: PurchaseRequestService,
  				private sysSvc: SystemService,
  				private router: Router) { }

  	ngOnInit() {
  		if(this.sysSvc.data.user.loggedIn) {
  			this.purchaseRequest.User = this.sysSvc.data.user.instance;
  		} else {
  			console.error("User not logged in.");
}
 	}

}
