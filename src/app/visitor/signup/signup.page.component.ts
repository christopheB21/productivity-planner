import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Visitor } from '@app/core/entity/user.interface';
import { RegisterUserUseCaseService } from './domain/register-user.use-case.service';

@Component({
    imports: [FormsModule],
    templateUrl: './signup.page.component.html',
    styleUrl: './signup.page.component.scss'
})
export class SignupPageComponent {

  readonly #registerUserUseCase = inject(RegisterUserUseCaseService);

  readonly name = signal('');
  readonly email = signal('');
  readonly password = signal('');
  readonly confirmPassword = signal('');

  readonly isPasswordMatchValid = computed(
    () => this.password() === this.confirmPassword()
  );

  onSubmit() {

    const visitor: Visitor = {
      name: this.name(),
      email: this.email(),
      password: this.password()
    }
    this.#registerUserUseCase.execute(visitor)
  }

  onTouchedOrDirty(fieldName: NgModel, error: string) {
    return fieldName.dirty && fieldName.hasError(error)
  }

}