import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TaskFieldDumbComponent } from './task-field/task-field.dumb.component';
import { TaskReadonlyDumbComponent } from './task-readonly/task-readonly.dumb.component';
import { WorkdayStore } from './workday.page.store';
@Component({
  imports: [TaskFieldDumbComponent, TaskReadonlyDumbComponent],
  providers: [WorkdayStore],
  templateUrl: './workday.page.component.html',
  styleUrl: './workday.page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkdayPageComponent {
  readonly store = inject(WorkdayStore);
}
