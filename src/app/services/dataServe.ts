import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { product } from "../components/productmodal";


@Injectable({
    providedIn: 'root',
})
export class DataService {

    products = [];
    constructor(private http: HttpClient) {}

        getProducts(): Observable<any[]>{
           return this.http.get<any[]>('https://dummyjson.com/products');
        }

        getProductbyid(id:string){
            return this.http.get('https://dummyjson.com/products/'+id);
        }
    }
