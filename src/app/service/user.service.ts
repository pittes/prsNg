import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


const url: string = 'http://localhost:8080/Users/';

@Injectable()
export class UserService {

  	list(): Observable <User[]> {
		return this.http.get(url+"List") as Observable <User[]>;
	}

	constructor(private http: HttpClient) { }


}
