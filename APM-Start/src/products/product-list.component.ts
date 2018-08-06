import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
}
)

export class ProductListComponent implements OnInit {

    errorMessage :string ;
    constructor(private productService: ProductService) {
        this.listFilter='';
    }
    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products=> { this.products=products;  this.filteredProducts=this.products;},
            error=>this.errorMessage =<any>error
        );
       
    }
    pageTitle: string = 'Product List';
    showImage: boolean = true;
    _listFilter: string;
    get listFilter():string {
        return this._listFilter;
    }

    set listFilter(value:string) {
        this._listFilter=value;
        console.log(value);
        this.filteredProducts = this.listFilter?this.performFilter(this.listFilter):this.products;

    }

    filteredProducts: IProduct[];

    products: IProduct[];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProduct) => 
                                product.productName.toLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message: string): void {
        console.log("message is " + message);
    }
}