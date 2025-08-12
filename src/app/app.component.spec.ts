import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { provideZonelessChangeDetection } from '@angular/core';

describe('AppComponent', () => {

  const mockActivatedRoute = {
    paramMap: of(convertToParamMap({})),
    snapshot: {
      paramMap: convertToParamMap({})
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
            providers: [
              provideZonelessChangeDetection(),
              { provide: ActivatedRoute, useValue: mockActivatedRoute }
            ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
