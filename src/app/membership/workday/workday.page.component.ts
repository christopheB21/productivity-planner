import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WorkdayStore } from './workday.page.store';
@Component({
  imports: [],
  providers: [WorkdayStore],
  templateUrl: './workday.page.component.html',
  styleUrl: './workday.page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkdayPageComponent {
  readonly store = inject(WorkdayStore);
}
