import { Component } from '@angular/core';
import { HomepageFeatureCardListDumbComponent } from './homepage-feature-card-list/homepage-feature-card-list.dumb.component';
import { CardList } from '../../core/Card';

@Component({
  standalone: true,
  imports: [HomepageFeatureCardListDumbComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  cardList: CardList = [
    {
      title: "carte 1",
      description: "test de card 1",
      icon: ""
    },
    {
      title: "carte 2",
      description: "test de card 2",
      icon: ""
    },
    {
      title: "carte 3",
      description: "test de card 3",
      icon: ""
    }
  ]
}
