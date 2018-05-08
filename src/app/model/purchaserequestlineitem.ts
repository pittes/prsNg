import { Product } from './product';
import { PurchaseRequest } from './purchaserequest';

export class PurchaseRequestLineItem {
	Id: number;
	PurchaseRequest: PurchaseRequest;
	Product: Product;
	Quantity: number;

	constructor(inId: number = 0, pr: PurchaseRequest = null, prod: Product = null, qty: number = 0) {
		this.Id = inId;
		this.PurchaseRequest = pr;
		this.Product = prod;
		this.Quantity = qty;
	}

	about() {
		return ("PRLineItem: Id="+this.Id+" PurchaseRequest="+this.PurchaseRequest.Id+
				" Product="+this.Product.Name+" Quantity="+this.Quantity);
	}
}
