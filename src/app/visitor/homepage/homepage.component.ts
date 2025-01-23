import { Component, signal } from '@angular/core';
import { HomepageFeatureCardListDumbComponent } from './homepage-feature-card-list/homepage-feature-card-list.dumb.component';
import { HomebannerDumbComponent } from "./homebanner/homebanner.dumb.component";
@Component({
  standalone: true,
  imports: [HomepageFeatureCardListDumbComponent, HomebannerDumbComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  cardList = signal([
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
  ])

  onBannerClicked() {
    console.log("Banner clicked");
  }
}
