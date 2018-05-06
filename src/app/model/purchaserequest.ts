import { User } from './user';

export class PurchaseRequest {
	Id: number;
	User: User;
	Description: string;
	Justification: string;
	DateNeeded: string;
	DeliveryMode: string;
	Status: string;
	Total: number;
	SubmittedDate: Date;
	ReasonForRejection: string;

	constructor(inId: number = 0, user: User = null, desc: string = '', jstfctn: string = '',
				dtNeed: string = '', dlvMode: string = '', status: string = '',
				total: number = 0, sbmtDate: Date = null, reasRjct: string = '') {
		this.Id = inId;
		this.User = user;
		this.Description = desc;
		this.Justification = jstfctn;
		this.DateNeeded = dtNeed;
		this.DeliveryMode = dlvMode;
		this.Status = status;
		this.Total = total;
		this.SubmittedDate = sbmtDate;
		this.ReasonForRejection = reasRjct;
	}

	about(): string {
		return ("PurchaseRequest: Id="+this.Id+" User="+this.User.Id+
				" Description="+this.Description+" Justification="+this.Justification+
				" DateNeeded="+this.DateNeeded+" DeliveryMode="+this.DeliveryMode+
				" Status="+this.Status+" Total="+this.Total+" SubmittedDate="+this.SubmittedDate+
				" ReasonForRejection="+this.ReasonForRejection);
	}
}
