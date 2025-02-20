import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
    imports: [FormsModule],
    templateUrl: './signup.page.component.html',
    styleUrl: './signup.page.component.scss'
})
export class SignupPageComponent {

  readonly authenticationService = inject(AuthenticationService);

  readonly name = signal('');
  readonly email = signal('');
  readonly password = signal('');
  readonly confirmPassword = signal('');

  readonly isPasswordMatchValid = computed(
    () => this.password() === this.confirmPassword()
  );

  readonly isValidEmail = computed(
    () => {
      const localPartRegex = /^[^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*$/;
      const domainRegex = /^(([a-zA-Z\-0-9]+\.)+([a-zA-Z]{2,})|(\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\])$/;
      const [localPart, domain] = this.email().split('@');
      return localPartRegex.test(localPart) && domainRegex.test(domain);
    }
  )

  onSubmit() {
    console.log("form submitted");
    this.authenticationService
      .register(this.email(), this.password())
      .subscribe((response)=>{
        console.log("User registered with id : ", response.userId)
});
  }

  onTouchedOrDirty(fieldName: NgModel, error: string) {
    return fieldName.dirty && fieldName.hasError(error)
  }

}