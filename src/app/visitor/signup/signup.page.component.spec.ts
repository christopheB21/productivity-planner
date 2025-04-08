import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPageComponent } from './signup.page.component';
import { RegisterUserUseCaseService } from './domain/register-user.use-case.service';

describe('SignupPageComponent', () => {
  let component: SignupPageComponent;
  let fixture: ComponentFixture<SignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupPageComponent],
      providers: [
        { provide: RegisterUserUseCaseService, useValue: {} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
