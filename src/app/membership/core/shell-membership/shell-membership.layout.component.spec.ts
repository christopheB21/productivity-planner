import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellMembershipLayoutComponent } from './shell-membership.layout.component';
import { provideRouter } from '@angular/router';

describe('ShellMembershipLayoutComponent', () => {
  let component: ShellMembershipLayoutComponent;
  let fixture: ComponentFixture<ShellMembershipLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellMembershipLayoutComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellMembershipLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
