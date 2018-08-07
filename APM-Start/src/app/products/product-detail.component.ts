import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products: IProduct[] = [];
  errorMessage: string = '';
  product: IProduct;

  pageTitle : string = 'Product Detail';
  constructor(private route: ActivatedRoute, private router: Router,private productService: ProductService) { 
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle+= `:${id}`;
    this.productService.getProducts().subscribe(
      products=> { 
          this.products  = products.filter((product: IProduct) => 
                                product.productId==id)
          if(products && products.length>0)
            this.product = this.products[0];                      
      },
      error=>this.errorMessage =<any>error
    );
  }

  onBack() : void {
    this.router.navigate(['/products']);
  }

}
