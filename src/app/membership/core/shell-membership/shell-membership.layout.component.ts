import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell-membership',
  imports: [RouterOutlet],
  templateUrl: './shell-membership.layout.component.html',
  styleUrl: './shell-membership.layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellMembershipLayoutComponent {

}
