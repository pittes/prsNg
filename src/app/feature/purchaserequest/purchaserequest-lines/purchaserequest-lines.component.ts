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
    request: PurchaseRequest;
  	id: string;
    resp: any;

  constructor(private prliSvc: PurchaseRequestLineItemService,
              private prSvc: PurchaseRequestService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.route.params.subscribe(parms => this.prliId = parms['del']);
    console.log("this.id=", this.id);
    console.log("prliId=", this.prliId);  
    this.prSvc.get(this.id)
      .subscribe(purchaserequests => {
        this.request = purchaserequests.length > 0 ? purchaserequests[0] : null;
        console.log("request = ", this.request);
      }
    );
    // if 'del' param is present, delete the prli by the id passed into 'del' param
    if (this.prliId!='0' && this.prliId!=null) {
      this.remove();
    }
    
    this.prliSvc.listByPR(this.id)
      .subscribe(prlis => {
        this.prLineItems = prlis;
      });
  }

  remove(): void {
    this.prliSvc.remove(this.prliId)
      .subscribe(res => {
        this.router.navigateByUrl("/purchaserequest/lines/"+this.id);
      });
  }

  submitForReview(): void {
    this.prSvc.submitForReview(this.request)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchaserequest/list']);
      });

}
}
