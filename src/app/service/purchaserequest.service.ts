import { Injectable } from '@angular/core';
import { PurchaseRequest } from '../model/purchaserequest';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const url: string = 'http://localhost:8080/PurchaseRequests/';

@Injectable()
export class PurchaseRequestService {

  	list(): Observable <PurchaseRequest[]> {
		return this.http.get(url+"List") as Observable <PurchaseRequest[]>;
	}

	listForReview(id): Observable <PurchaseRequest[]> {
		return this.http.get(url+"ListReview?id="+id) as Observable <PurchaseRequest[]>;
	}

	create(purchaseRequest: PurchaseRequest): Observable <any> {
		console.log("purchaserequestsvc.create...");
		return this.http.post(url+"Add", purchaseRequest) as Observable <any>;
	}

	get(id): Observable <PurchaseRequest[]> {
		return this.http.get(url+"Get?id="+id) as Observable <PurchaseRequest[]>;
	}

	remove(id): Observable <any> {
		return this.http.get(url+"Remove?id="+id) as Observable <any>;
	}

	change(purchaseRequest: PurchaseRequest): Observable <any> {
		return this.http.post(url+"Change", purchaseRequest) as Observable <any>;
	}

	submitForReview(purchaseRequest: PurchaseRequest): Observable<any> {
        return this.http.post(url+"SubmitForReview", purchaseRequest) as Observable<any>;
	}

	approve(purchaseRequest: PurchaseRequest): Observable<any> {
      return this.http.post(url+"ApprovePR", purchaseRequest) as Observable<any>;
  	}
  
  	reject(purchaseRequest: PurchaseRequest): Observable<any> {
      return this.http.post(url+"RejectPR", purchaseRequest) as Observable<any>;
	}

  constructor(private http: HttpClient) { }

}
