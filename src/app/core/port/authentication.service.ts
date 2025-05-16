
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationFirebaseService } from '../adapter/authentication-firebase.service';

export interface RegisterResponse {
  jwtToken: string;
  refreshToken: string;
  expiresIn: string;
  userId: string;
}

export class EmailAlreadyExtistsError extends Error {}

export interface LoginResponse {
  jwtToken: string;
  expiresIn: string;
  userId: string;
  refreshToken: string;
  isRegistered: boolean;
}

@Injectable({
  providedIn: 'root',
  useClass: AuthenticationFirebaseService
})
export abstract class AuthenticationService {

  abstract register(
    email: string,
    password: string
  ): Observable<RegisterResponse|EmailAlreadyExtistsError>

  abstract login(
    email: string,
    password: string
  ): Observable<LoginResponse>
}
