import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomebannerDumbComponent } from './homebanner.dumb.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomebannerDumbComponent', () => {
  let component: HomebannerDumbComponent;
  let fixture: ComponentFixture<HomebannerDumbComponent>;
  let debugElement: DebugElement;

  let title: DebugElement;
  let description: DebugElement;
  let button: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomebannerDumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomebannerDumbComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.componentRef.setInput('title', 'expectedTitle');
    fixture.componentRef.setInput('description', 'expectedDescription');
    fixture.componentRef.setInput('button', 'expectedButton');
    fixture.detectChanges();
  });

  beforeEach(()=> {
    title = debugElement.query(By.css('[data-testid="banner-title"]'));   
    description = debugElement.query(By.css('[data-testid="banner-description"]'));   
    button = debugElement.query(By.css('[data-testid="banner-button"]'));   
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    expect(title.nativeElement.textContent).toContain('expectedTitle');
  });

  it('should display description', () => {
    expect(description.nativeElement.textContent).toContain('expectedDescription');
  });

  it('should display button', () => {
    expect(button.nativeElement.textContent).toContain('expectedButton');
  });
  
  it('should trigger event on button click', () => {
    jest.spyOn(component.clicked, 'emit');
    button.nativeElement.click();
    expect(component.clicked.emit).toHaveBeenNthCalledWith(1);
  });
});
