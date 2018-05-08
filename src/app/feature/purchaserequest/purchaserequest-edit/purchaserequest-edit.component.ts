import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './purchaserequest-edit.component.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})
export class PurchaseRequestEditComponent implements OnInit {

	title: string = "PurchaseRequest Edit";

	id: string;
	resp: any;
	
	purchaseRequest: PurchaseRequest;

  	constructor(private prSvc: PurchaseRequestService,
  				private router: Router,
  				private route: ActivatedRoute) { }

  	ngOnInit() {
  		this.route.params.subscribe(parms => this.id = parms['id']);
  		this.prSvc.get(this.id)
  			.subscribe(prs => {
  					this.purchaseRequest = prs.length > 0 ? prs[0] : null;
  					console.log(this.purchaseRequest);
  		});
  	}

  	change() {
  	console.log(this.purchaseRequest);
  	this.prSvc.change(this.purchaseRequest)
  		.subscribe(resp => {
  			this.resp = resp;
  			console.log("PurchaseRequest-Change:", this.resp);
  			this.router.navigate(['/purchaserequest/list']);
  		});
  }

}
