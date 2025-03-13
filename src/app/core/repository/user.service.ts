import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserFirebaseService } from './user-firebase.service';

export interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
  useClass: UserFirebaseService
})
export abstract class UserService {

  abstract create(user: User, bearerToken: string): Observable<void>;
  //fetch(id: strong): Observable<User> {}
  // delete(user: User): Observable<void> {}
  // update(user: User): Observable<void>{}
}



