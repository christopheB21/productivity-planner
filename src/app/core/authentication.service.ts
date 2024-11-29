import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


interface FirebaseUserResponse {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly #httpClient = inject(HttpClient);
  registerFirebaseUser(email: string, password: string): Observable<FirebaseUserResponse> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`
    const body = {"email":email,"password":password, "retrunSecureToke":true };
    return this.#httpClient.post<FirebaseUserResponse>(url, body);
    }
}
