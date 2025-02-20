
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { AuthenticationService, LoginResponse, RegisterResponse } from './authentication.service';

interface FirebaseUserSignUpResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

interface FirebaseUserSignInResponse {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
}

@Injectable()
export class AuthenticationFirebaseService implements AuthenticationService {

  readonly #httpClient = inject(HttpClient);
  
  register(email: string, password: string): Observable<RegisterResponse> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`
    const body = {email,password, returnSecureToken:true };
    
    return this.#httpClient.post<FirebaseUserSignUpResponse>(url, body).pipe(
        map( (response) => ({
            jwtToken: response.idToken,
            refreshToken: response.refreshToken,
            expiresIn: response.expiresIn,
            userId: response.localId
        }))
    );;
    }

  login(email: string, password: string): Observable <LoginResponse> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`
    const body = {email,password, returnSecureToken:true };
    return this.#httpClient.post<FirebaseUserSignInResponse>(url, body).pipe(
        map( (response) => ({
            jwtToken: response.idToken,
            refreshToken: response.refreshToken,
            expiresIn: response.expiresIn,
            userId: response.localId,
            isRegistered: response.registered
        }))
    );
  }

//   writeFirebaseDatabase(email: string, userId: string, bearerToken: string): Observable<unknown> {
//     const baseUrl = `https://firestore.googleapis.com/v1/projects/${environment.firebaseConfig.projectId}/databases/(default)/documents`;
//     const firestoreCollectionId = 'users';
//     const url = `${baseUrl}/${firestoreCollectionId}?key=${environment.firebaseConfig.apiKey}&documentId=${userId}`;
//     const body = {
//       fields: {
//         email: { stringValue: email },
//       },
//     };
//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${bearerToken}`
//     })
//     const options = { headers };
//     return this.#httpClient.post(url, body, options);
//   }
}
