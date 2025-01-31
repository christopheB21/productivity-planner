import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-homebanner',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './homebanner.dumb.component.html',
  styleUrl: './homebanner.dumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'text-white d-flex flex-column justify-content-center align-items-center text-center',
  },
})
export class HomebannerDumbComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly button = input.required<string>();
  readonly clicked = output<void>();
}
