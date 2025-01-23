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
      title: "Planifier sa semaine",
      description: "Visibilité sur les 7 prochains jours",
      icon: "bi bi-calendar3 fs-1"
    },
    {
      title: "Atteindre ses objectifs",
      description: "Priorisation des tâches",
      icon: "bi bi-trophy fs-1"
    },
    {
      title: "Analyser sa productivité",
      description: "Visualiser le travail accompli",
      icon: "bi bi-graph-up-arrow fs-1"
    }
  ])

  onBannerClicked() {
    console.log("Banner clicked");
  }
}
