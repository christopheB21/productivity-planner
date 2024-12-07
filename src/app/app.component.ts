import { Component, inject } from '@angular/core';
import { AuthenticationService } from './core/authentication.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  readonly #authenticationService = inject(AuthenticationService);


  title = 'productivity-planner';
  onLogin() {
    const email = 'john.doe@gmail.com';
    const password = 'azerty';
    this.#authenticationService
      .firebaseLogin(email,password)
      .pipe(
        switchMap(response =>  { 
          console.log(response);
          const { email, localId, idToken } = response;
          return this.#authenticationService.writeFirebaseDatabase(email, localId, idToken);
        })
      )
      .subscribe(response=> console.log(response));
  }
}