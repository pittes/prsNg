import { Vendor } from './vendor';

export class Product {
	Id: number;
	Vendor: Vendor;
	VendorPartNumber: string;
	Name: string;
	Price: number;
	Unit: string;
	PhotoPath: string;

	constructor(inId: number = 0, vnd: Vendor = null, vPartNbr: string = '', name: string = '',
				price: number = 0, unit: string = '', photoPath: string = '') {

	}

	about(): string {
		return ("Product: Id="+this.Id+" Vendor="+this.Vendor+" PartNumber="+this.VendorPartNumber+
				" Name="+this.Name+" Price="+this.Price+" Unit="+this.Unit+" PhotoPath="+this.PhotoPath);
	}
}
