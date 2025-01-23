import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-homebanner',
  standalone: true,
  imports: [],
  templateUrl: './homebanner.dumb.component.html',
  styleUrl: './homebanner.dumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomebannerDumbComponent {
  title = input.required<string>();
  description = input.required<string>();
  button = input.required<string>();
}
