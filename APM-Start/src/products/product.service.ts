import { Injectable } from "../../node_modules/@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable , throwError} from "rxjs";
import { catchError, tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productURL = "api/products/products.json";

    constructor(private http: HttpClient) {

    }

    getProducts() : Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productURL).pipe(
            tap(data => console.log('ALL: ' + JSON.stringify(data))),
            catchError(this.handleError)    
        ); 
    }

    private handleError(err: HttpErrorResponse) {

        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned error code ${err.status}, error message is ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage)
    }

}