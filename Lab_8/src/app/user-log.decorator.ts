import { Injectable, Inject } from '@angular/core';
import { AppUsersService, IUserService, USER_SERVICE } from './app.users.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UserLogDecoratorService {
    constructor(@Inject(USER_SERVICE) private userService: IUserService) {}
  
    getUsers(): Observable<any> {
      return this.userService.getUsers().pipe(
        tap(() => console.log('Users retrieved successfully'))
      );
    }
  }