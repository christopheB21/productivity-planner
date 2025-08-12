import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellMembershipLayoutComponent } from './shell-membership.layout.component';
import { provideRouter } from '@angular/router';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ShellMembershipLayoutComponent', () => {
  let component: ShellMembershipLayoutComponent;
  let fixture: ComponentFixture<ShellMembershipLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellMembershipLayoutComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([])]
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
