import {Injectable, Inject} from "@angular/core";

import {Http, Response} from "@angular/http";

 
import "rxjs/Rx";
import { HttpClient } from "../auth/services/auth.http-client";

@Injectable()
export class BrandService {
    constructor(private http: HttpClient,
                @Inject("apiEndPoint") private apiEndPoint:string) {

    }

    getBrands() {
        return this.http.get(this.apiEndPoint + "/api/brands")
        .map((response: Response) => response.json()); 
    }
}