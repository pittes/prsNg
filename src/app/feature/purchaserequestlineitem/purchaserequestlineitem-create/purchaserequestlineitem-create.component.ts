import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';

@Component({
  selector: 'app-purchaserequestlineitem-create',
  templateUrl: './purchaserequestlineitem-create.component.html',
  styleUrls: ['./purchaserequestlineitem-create.component.css']
})
export class PurchaseRequestLineItemCreateComponent implements OnInit {

	title: string = "PurchaseRequestLineItem Create";
	resp: any;
	prID: number;

	request: PurchaseRequest;
	product: Product;
	lineItem: PurchaseRequestLineItem = new PurchaseRequestLineItem(0, this.request, this.product, 0);
	
	products: Product[];


	create() {
		// set the purchase request
		this.lineItem.PurchaseRequest = this.request;
		console.log("prli service create...");
		console.log(this.lineItem);
		this.prliSvc.create(this.lineItem)
			.subscribe(resp => {
				this.resp = resp;
				this.router.navigate(['/purchaserequest/lines/'+this.prID]);
			});
	}

  constructor(private prodSvc: ProductService,
  				private prSvc: PurchaseRequestService,
  				private prliSvc: PurchaseRequestLineItemService,
  				private router: Router,
  				private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => {
  		this.prID = parms["id"];
  		this.prSvc.get(this.prID)
  			.subscribe(prs => {
  					this.request = prs.length > 0 ? prs[0] : null;
  					console.log(this.request);
  		});
  	});
  	this.prodSvc.list()
  		.subscribe(productList => this.products = productList);
  }

}
