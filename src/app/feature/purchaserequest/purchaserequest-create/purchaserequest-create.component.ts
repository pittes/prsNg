import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PurchaseRequestService } from '../../../service/purchaserequest.service';
import { UserService } from '../../../service/user.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { User } from '../../../model/user';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {

	title: string = 'Purchase Request Create';

	resp: any;

	purchaserequest: PurchaseRequest = new PurchaseRequest();

	user: User;

	create() {
			console.log(this.purchaserequest);
			this.prSvc.create(this.purchaserequest)
					.subscribe(resp => {
							this.resp = resp;
							this.router.navigate(['/purchaserequest/list']);
					});
	}

  constructor(private prSvc: PurchaseRequestService,
  						private userSvc: UserService,
  						private router: Router) { }

  ngOnInit() {
  }

}
