import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebannerDumbComponent } from './homebanner.dumb.component';

describe('HomebannerDumbComponent', () => {
  let component: HomebannerDumbComponent;
  let fixture: ComponentFixture<HomebannerDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomebannerDumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomebannerDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
