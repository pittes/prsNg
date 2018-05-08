import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-purchaserequest-lines',
  templateUrl: './purchaserequest-lines.component.html',
  styleUrls: ['./purchaserequest-lines.component.css']
})
export class PurchaseRequestLinesComponent implements OnInit {

	title: string = "PurchaseRequestLineItem List";
  	prLineItems: PurchaseRequestLineItem[] = [];
  	prliId: string = '0';
  	id: string;

  constructor(private prliSvc: PurchaseRequestLineItemService,
              private prSvc: PurchaseRequestService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params
  		.subscribe(parms => {
  			// Retrieve ID# for chosen purchase request
  			let id = parms["id"];
  			console.log('Getting list of prlis...');
    		this.prliSvc.listByPR(id).subscribe(prlis => {
      			this.prLineItems = prlis;
      			console.log(prlis);
  			});
  		});
  }

  remove(): void {
    this.prliSvc.remove(this.prliId)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/purchaserequest/lines/"+this.id);
      });
}
}
