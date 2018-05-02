import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	users: User[] = [];
	title: string = "User List";

  constructor(private userSvc: UserService) { }

  ngOnInit() {
  	this.userSvc.list().subscribe(
  		userSvcList => {
  			console.log(userSvcList);
  			this.users = userSvcList;
  		}
  	);
  }

}