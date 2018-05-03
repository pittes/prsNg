import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { VendorService } from '../../../service/vendor.service';
import { Product } from '../../../model/product';
import { Vendor } from '../../../model/vendor';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

	title: string = 'Product Create';

	resp: any;

	product: Product = new Product();

	vendors: Vendor[];

	create() {
			console.log(this.product);
			this.productSvc.create(this.product)
					.subscribe(resp => {
							this.resp = resp;
							this.router.navigate(['/product/list']);
					});
	}

  constructor(private productSvc: ProductService,
  						private vendorSvc: VendorService,
  						private router: Router) { }

  ngOnInit() {
  	this.vendorSvc.list()
  		.subscribe(vendorList => this.vendors = vendorList);
  }

}
