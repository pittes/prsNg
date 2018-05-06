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

	create(purchaserequest: PurchaseRequest): Observable <any> {
		console.log("purchaserequestsvc.create...");
		return this.http.post(url+"Add", purchaserequest) as Observable <any>;
	}

	get(id): Observable <PurchaseRequest[]> {
		return this.http.get(url+"Get?id="+id) as Observable <PurchaseRequest[]>;
	}

	remove(id): Observable <any> {
		return this.http.get(url+"Remove?id="+id) as Observable <any>;
	}

	change(purchaserequest: PurchaseRequest): Observable <any> {
		return this.http.post(url+"Change", purchaserequest) as Observable <any>;
	}

  constructor(private http: HttpClient) { }

}
