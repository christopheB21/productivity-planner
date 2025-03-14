import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { AuthenticationService } from '../../core/authentication.service';
import { Visitor } from '../../core/entity/user.interface';
import { UserStore } from '../../core/store/user.store';

@Component({
    imports: [FormsModule],
    templateUrl: './signup.page.component.html',
    styleUrl: './signup.page.component.scss'
})
export class SignupPageComponent {

  readonly authenticationService = inject(AuthenticationService);
  readonly store = inject(UserStore);

  readonly name = signal('');
  readonly email = signal('');
  readonly password = signal('');
  readonly confirmPassword = signal('');

  readonly isPasswordMatchValid = computed(
    () => this.password() === this.confirmPassword()
  );

  onSubmit() {
    console.log("form submitted");
    const visitor: Visitor = {
      name: this.name(),
      email: this.email(),
      password: this.password()
    }
    this.store.register(visitor);
  }

  onTouchedOrDirty(fieldName: NgModel, error: string) {
    return fieldName.dirty && fieldName.hasError(error)
  }

}