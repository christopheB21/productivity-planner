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

  it.todo('should disply title');
  it.todo('should display description');
  it.todo('should display button');
  it.todo('should trigger event on button click');
});
