import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-homebanner',
  standalone: true,
  imports: [],
  templateUrl: './homebanner.dumb.component.html',
  styleUrl: './homebanner.dumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomebannerDumbComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly button = input.required<string>();
  readonly clicked = output<void>();
}
