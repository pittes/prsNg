import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {

  	title: string = "PurchaseRequest Detail";
	
	purchaseRequest: PurchaseRequest;

  	

  	constructor(private prSvc: PurchaseRequestService,
  				private router: Router,
  				private route: ActivatedRoute) { }

  	ngOnInit() {
  		this.route.params
  			.subscribe(parms => {
  				let id = parms["id"];
  				this.getPurchaseRequestById(id);
  		});
  	}

  	getPurchaseRequestById(id) {
  	this.prSvc.get(id)
  		.subscribe(prs => {
  			this.purchaseRequest = prs.length > 0 ? prs[0] : null;
  			console.log("PurchaseRequest:", this.purchaseRequest);
  		});
  	}

  	remove(): void {
  	this.prSvc.remove(this.purchaseRequest.Id)
  		.subscribe(res => {
  			console.log(res);
  			this.router.navigateByUrl("/purchaserequest/list");
  		});
  }

}
