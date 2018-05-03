export class Vendor {
	Id: number;
	Code: string;
	Name: string;
	Address: string;
	City: string;
	State: string;
	Zip: string;
	PhoneNumber: string;
	Email: string;
	PreApproved: boolean;
	Active: boolean;

	constructor(inId: number = 0, code: string = '', name: string = '', addr: string = '', 
				city: string = '', state: string = '', zip: string = '', phNbr: string = '', 
				email: string = '', preApp: boolean = false, act: boolean = false) {

	}

	about(): string {
		return ("Vendor: Id="+this.Id+" Code="+this.Code+" Name="+this.Name+" Address="+this.Address+
				" City="+this.City+" State="+this.State+" Zip="+this.Zip+" PhoneNumber="+this.PhoneNumber+
				" Email="+this.Email+" PreApproved="+this.PreApproved+" Active="+this.Active);
	}
}