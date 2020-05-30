import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class HttpHelperService {

    private baseUrl = environment.baseUrl;

    constructor(
        protected httpClient: HttpClient) { }

    get(serviceUrl: string, queryString: string = ""): Observable<any> {
        return this.httpClient
            .get<any>(`${this.baseUrl}/${serviceUrl}${queryString}`);
    }

}