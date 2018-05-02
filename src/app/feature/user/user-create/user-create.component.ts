import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

	title: string = "User Create";
	// user: User = new User(0,'','','','','','',false,false,true);
	user: User = new User();

  constructor() { }

  ngOnInit() {
  }

}
