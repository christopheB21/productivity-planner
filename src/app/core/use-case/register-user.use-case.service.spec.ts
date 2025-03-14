import { TestBed } from '@angular/core/testing';

import { RegisterUserUseCaseService } from './register-user.use-case.service';
import { provideHttpClient } from '@angular/common/http';

describe('RegisterUserUseCaseService', () => {
  let service: RegisterUserUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(RegisterUserUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
