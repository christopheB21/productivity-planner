import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSmartComponent } from './navbar.smart.component';

describe('HeaderSmartComponent', () => {
  let component: HeaderSmartComponent;
  let fixture: ComponentFixture<HeaderSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSmartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should render header title', () => {
    const fixture = TestBed.createComponent(HeaderSmartComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.textContent).toContain('Awesome List');
  });
});
