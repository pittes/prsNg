export class User {
	Id:	number;
	UserName: string;
	Password: string;
	FirstName: string;
	LastName: string;
	PhoneNumber: string;
	Email: string;
	Reviewer: boolean;
	Admin: boolean;
	Active: boolean;

	constructor(inId: number = 0, uName: string = '', pwd: string = '', fName: string = '',
				lName: string = '', phoneNbr: string = '', email: string = '', rvw: boolean = false,
				adm: boolean = false, act: boolean = true) {
		this.Id = inId;
		this.UserName = uName;
		this.Password = pwd;
		this.FirstName = fName;
		this.LastName = lName;
		this.PhoneNumber = phoneNbr;
		this.Email = email;
		this.Reviewer = rvw;
		this.Admin = adm;
		this.Active = act;
	}

	about(): string {
		return ("User: Id="+this.Id+" UserName="+this.UserName+" Password="+this.Password+
				"FirstName="+this.FirstName+" LastName="+this.LastName+" PhoneNumber="+this.PhoneNumber+
				"Email="+this.Email+" Reviewer="+this.Reviewer+" Admin="+this.Admin+" Active="+this.Active);
	}
}