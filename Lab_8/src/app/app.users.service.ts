import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


export const USER_SERVICE = new InjectionToken<IUserService>('USER_SERVICE');

export interface IUserService {
  getUsers(): Observable<User>;
}


@Injectable({
  providedIn: 'root',
})
export class AppUsersService implements IUserService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    return this.http.get<User>('https://randomuser.me/api/?results=50');
  }
}
