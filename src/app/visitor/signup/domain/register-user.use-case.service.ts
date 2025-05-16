import { inject, Injectable } from '@angular/core';
import { User, Visitor } from '@app/core/entity/user.interface';
import { AuthenticationService, EmailAlreadyExtistsError } from '@app/core/port/authentication.service';
import { firstValueFrom } from 'rxjs';
import { UserService } from '@app/core/port/user.service';
import { UserStore } from '@app/core/store/user.store';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserUseCaseService {

  readonly #authenticationService = inject(AuthenticationService);
  readonly #userService = inject(UserService);
  readonly #userStore = inject(UserStore);
  readonly #router = inject(Router);

  async execute(visitor: Visitor): Promise<void> {
    // 1. Authenticate new visitor
    const { name, email, password } = visitor
    const registerResponse = await firstValueFrom(this.#authenticationService.register(email,password));

    // 2. Add credentials information in session storage
    if (registerResponse instanceof EmailAlreadyExtistsError) {
      throw registerResponse
    }
    const { userId: id, jwtToken } = registerResponse;

    localStorage.setItem('jwtToken', jwtToken);

    // 3. Create new user in database
    const user: User = { id, name, email };
    await firstValueFrom(this.#userService.create(user, jwtToken));

    // 4. Add user in app store
    this.#userStore.register(user);

    // 5. Redirect user to dashboard
    this.#router.navigate(['/app/dashboard']);
  }
}
