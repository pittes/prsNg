import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';
import { SystemService } from '../../../service/system.service';
import { SortPipe } from '../../../pipe/sort.pipe';

@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {

	title: string = "PurchaseRequest List";
  requests: PurchaseRequest[] = [];
  sortBy: string = "Id";
	
  // mock login...this will be replaced once login component complete
  user: User;

  constructor(private prSvc: PurchaseRequestService,
              private userSvc: UserService,
              private sysSvc: SystemService) { }

  ngOnInit() {
    console.log('Getting list of prs...');
    this.prSvc.list().subscribe(prs => {
      this.requests = prs;
      this.populateUserName();
      console.log(prs);
    });
    // mock login - hardcoded for now for testing purposes
    this.userSvc.login("epitt", "blinky")
      .subscribe(users => {
        if(users.length > 0) {
            this.user = users[0];
            this.sysSvc.data.user.instance = this.user;
            this.sysSvc.data.user.loggedIn = true;
            console.log("SysSvc:", this.sysSvc.debug);
            
        }
    });
  }

  populateUserName(): void {
    for (let pr of this.requests) {
      pr.UserName = pr.User.UserName;
    }
  }

  setSortBy(column: string): void {
    this.sortBy = column;
  }

}
