import { inject, Injectable } from '@angular/core';
import { User, Visitor } from '../entity/user.interface';
import { AuthenticationService } from '../authentication.service';
import { firstValueFrom } from 'rxjs';
import { UserService } from '../repository/user.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserUseCaseService {

  readonly #authenticationService = inject(AuthenticationService);
  readonly #userservice = inject(UserService);

  async execute(visitor: Visitor): Promise<User> {
    const response = await firstValueFrom(this.#authenticationService.register(visitor.email,visitor.password));
    
    localStorage.setItem('jwtToken', response.jwtToken);
    localStorage.setItem('jwtRefreshTOken', response.refreshToken);
    localStorage.setItem('expiresIn', response.expiresIn);

    const user: User = {
      'id': response.userId,
      'name': visitor.name,
      'email': visitor.email,
    }

    this.#userservice.create(user, response.jwtToken);

    return user;
  }
}
