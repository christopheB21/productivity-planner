import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardList } from '../../../core/Card';

@Component({
  selector: 'app-homepage-feature-card-list',
  standalone: true,
  imports: [],
  templateUrl: './homepage-feature-card-list.dumb.component.html',
  styleUrl: './homepage-feature-card-list.dumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageFeatureCardListDumbComponent {
  @Input() cardList: CardList = [];
}
