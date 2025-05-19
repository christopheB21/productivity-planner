import { TestBed } from '@angular/core/testing';
import { RegisterUserUseCaseService } from './register-user.use-case.service';
import { AuthenticationService } from '@app/core/port/authentication.service';
import { UserService } from '@app/core/port/user.service';
import { UserStore } from '@app/core/store/user.store';
import { Router } from '@angular/router';

describe('RegisterUserUseCaseService', () => {
  let service: RegisterUserUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RegisterUserUseCaseService,
        { provide: AuthenticationService, useValue: { register: jest.fn()}},
        { provide: UserService, useValue: { create: jest.fn( )}},
        { provide: UserStore, useValue: { register: jest.fn() }},
        { provide: Router, useValue: { navigate: jest.fn() }},
      ]
    });
    service = TestBed.inject(RegisterUserUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
