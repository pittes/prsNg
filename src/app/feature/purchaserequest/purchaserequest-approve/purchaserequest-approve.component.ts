import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';
import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-purchaserequest-approve',
  templateUrl: './purchaserequest-approve.component.html',
  styleUrls: ['./purchaserequest-approve.component.css']
})
export class PurchaseRequestApproveComponent implements OnInit {

	title: string = "PurchaseRequest Approve/Reject";
	id: string;
	prliId: string = '0';
	prLineItems: PurchaseRequestLineItem[] = [];
	request: PurchaseRequest;
	resp: any;
	reasonForRejection: string = '';

  constructor(private prSvc: PurchaseRequestService,
  						private prliSvc: PurchaseRequestLineItemService,
  						private router: Router,
							private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	
  	this.prSvc.get(this.id)
  		.subscribe(purchaserequests => {
  			this.request = purchaserequests.length > 0 ? purchaserequests[0] : null;
  		});
  	console.log("purchaserequest retreived for id=", this.id);
  	
  	this.prliSvc.listByPR(this.id)
  		.subscribe(prlis => {
  			this.prLineItems = prlis;
  		});
  	console.log("lineitems retrieved");
  }

  approve() {
  	this.prSvc.approve(this.request)
  		.subscribe(res => {
  			this.router.navigateByUrl('/purchaserequest/review');
  		});
  }

  reject() {
    console.log("reason for rejection = "+this.reasonForRejection);
    this.request.ReasonForRejection = this.reasonForRejection;
    this.prSvc.reject(this.request)
      .subscribe(res => {
        this.router.navigateByUrl("/purchaserequest/review");
      });
	}

}
