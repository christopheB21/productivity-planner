import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WorkdayStore } from './workday.page.store';
import { TaskFieldDumbComponent } from './task-field/task-field.dumb.component';
@Component({
  imports: [TaskFieldDumbComponent],
  providers: [WorkdayStore],
  templateUrl: './workday.page.component.html',
  styleUrl: './workday.page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkdayPageComponent {
  readonly store = inject(WorkdayStore);
}
