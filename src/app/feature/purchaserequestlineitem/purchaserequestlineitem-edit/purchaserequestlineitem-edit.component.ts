import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequestLineItem } from '../../../model/purchaserequestlineitem';
import { PurchaseRequestLineItemService } from '../../../service/purchaserequestlineitem.service';

@Component({
  selector: 'app-purchaserequestlineitem-edit',
  templateUrl: './purchaserequestlineitem-edit.component.html',
  styleUrls: ['./purchaserequestlineitem-edit.component.css']
})
export class PurchaseRequestLineItemEditComponent implements OnInit {

	title: string = "PurchaseRequestLineItem Edit";
	resp: any;
	prID: number;
	prliID: number;

	request: PurchaseRequest;
	product: Product;
	lineItem: PurchaseRequestLineItem;
	
	products: Product[];


  constructor(private prodSvc: ProductService,
  				private prliSvc: PurchaseRequestLineItemService,
  				private router: Router,
  				private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => {
  		this.prliID = parms["id"];
  		this.prliSvc.get(this.prliID)
  			.subscribe(prli => {
  					this.lineItem = prli.length > 0 ? prli[0] : null;
  					this.request = this.lineItem.PurchaseRequest;
  					console.log(this.lineItem);
  		});
  	});
  	this.prodSvc.list()
  		.subscribe(productList => this.products = productList);
  }

  change() {
	  	console.log(this.lineItem);
	  	this.prID = this.request.Id;
	  	this.prliSvc.change(this.lineItem)
	  		.subscribe(resp => {
	  			this.resp = resp;
	  			console.log("PRLI-Change:", this.resp);
	  			this.router.navigate(['/purchaserequest/lines/'+this.prID]);
	  		});
  	}

  	compareFn(pid1: number, pid2: number): boolean {
  		return pid1 === pid2;
  	}
}
