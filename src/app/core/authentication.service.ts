
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly #httpClient = inject(HttpClient);
  registerFirebaseUser(email: string, password: string): Observable<FirebaseUserSignUpResponse> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`
    const body = {email,password, returnSecureToken:true };
    return this.#httpClient.post<FirebaseUserSignUpResponse>(url, body);
    }

  firebaseLogin(email: string, password: string): Observable <FirebaseUserSignInResponse> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`
    const body = {email,password, returnSecureToken:true };
    return this.#httpClient.post<FirebaseUserSignInResponse>(url, body);
  }

  writeFirebaseDatabase(email: string, userId: string, bearerToken: string): Observable<unknown> {
    const baseUrl = `https://firestore.googleapis.com/v1/projects/${environment.firebaseConfig.projectId}/databases/(default)/documents`;
    const firestoreCollectionId = 'users';
    const url = `${baseUrl}/${firestoreCollectionId}?key=${environment.firebaseConfig.apiKey}&documentId=${userId}`;
    const body = {
      fields: {
        email: { stringValue: email },
      },
    };
    const headers = new HttpHeaders({
      Authorization: `Bearer ${bearerToken}`
    })
    const options = { headers };
    return this.#httpClient.post(url, body, options);
  }
}
