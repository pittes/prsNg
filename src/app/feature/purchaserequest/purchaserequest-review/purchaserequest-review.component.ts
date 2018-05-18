import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user.service';
import { SystemService } from '../../../service/system.service';
import { SortPipe } from '../../../pipe/sort.pipe';

@Component({
  selector: 'app-purchaserequest-review',
  templateUrl: './purchaserequest-review.component.html',
  styleUrls: ['./purchaserequest-review.component.css']
})
export class PurchaseRequestReviewComponent implements OnInit {

	title: string = "PurchaseRequest Review";
  requests: PurchaseRequest[] = [];
  sortBy: string = "Id";
  authenticatedUser: User;

  constructor(private prSvc: PurchaseRequestService,
              private userSvc: UserService,
              private sysSvc: SystemService) { }

  ngOnInit() {
  	this.authenticatedUser = this.sysSvc.data.user.instance;
  	console.log("Getting list for review");
  	this.prSvc.listForReview(this.authenticatedUser.Id)
  		.subscribe(prs => {
  			this.requests = prs;
  			this.populateUserName();
  		});
  	// mock login - hardcoded for now for testing purposes
    this.userSvc.login("ttim", "godblessus")
      .subscribe(users => {
        if(users.length > 0) {
            this.authenticatedUser = users[0];
            this.sysSvc.data.user.instance = this.authenticatedUser;
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
