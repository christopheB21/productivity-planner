import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarSmartComponent } from './navbar.smart.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('NavbarSmartComponent', () => {
  let component: NavbarSmartComponent;
  let fixture: ComponentFixture<NavbarSmartComponent>;
  const mockActivatedRoute = {
    paramMap: of(convertToParamMap({})),
    snapshot: {
      paramMap: convertToParamMap({})
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarSmartComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
     })
    .compileComponents();
    fixture = TestBed.createComponent(NavbarSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have router link', () => {
    expect(fixture.debugElement.query(By.css('a[routerLink]'))).toBeTruthy();
  });

});
