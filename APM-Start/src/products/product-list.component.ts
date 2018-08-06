import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
}
)

export class ProductListComponent implements OnInit {

    constructor() {
        this.filteredProducts=this.products;
        this.listFilter='';
    }
    ngOnInit(): void {
        console.log('On init');
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

    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Modern Chair",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/bg-img/1.jpg"
        },
        {
            "productId": 2,
            "productName": "Minimalistic Plant Pot",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/bg-img/2.jpg"
        },
        {
            "productId": 5,
            "productName": "Modern Chair",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/bg-img/3.jpg"
        },
        {
            "productId": 8,
            "productName": "Plant Pot",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "assets/images/bg-img/4.jpg"
        },
        {
            "productId": 10,
            "productName": "Small Tables",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "assets/images/bg-img/5.jpg"
        }

    ];

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