import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageFeatureCardListDumbComponent } from './homepage-feature-card-list.dumb.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('HomepageFeatureCardListDumbComponent', () => {
  let component: HomepageFeatureCardListDumbComponent;
  let fixture: ComponentFixture<HomepageFeatureCardListDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageFeatureCardListDumbComponent],
      providers:[provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageFeatureCardListDumbComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('cardList', [{
      name: 'expectedCardName',
      description: 'expectedDescrition',
      icon: 'expectedIcon'
    }]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it.todo('should contain input');
});
