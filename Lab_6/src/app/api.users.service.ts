import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
    providedIn: 'root',
})
export class ApiUsersService {
    constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
        return this.http.get<any>('https://randomuser.me/api/?results=10');
        // return this.http.get<any>('https://pipl.ir/v1/getPerson');
    }
}
