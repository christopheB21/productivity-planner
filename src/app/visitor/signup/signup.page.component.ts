import { Component, computed, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.page.component.html',
  styleUrl: './signup.page.component.scss',
})
export class SignupPageComponent {
  readonly name = signal('');
  readonly email = signal('');
  readonly password = signal('');
  readonly confirmPassword = signal('');

  readonly isPasswordMatchValid = computed(
    () => this.password() === this.confirmPassword()
  );

  onSubmit() {
    console.log('Form submitted');
  }

  onTouchedOrDirty(fieldName: NgModel, error: string) {
    return (fieldName.dirty || fieldName.touched) && fieldName.hasError(error)
  }
}