import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarSmartComponent } from '../sidebar/sidebar.smart.component';

@Component({
  imports: [RouterOutlet, SidebarSmartComponent],
  templateUrl: './shell-membership.layout.component.html',
  styleUrl: './shell-membership.layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'shell d-flex vh-100'
  }
})
export class ShellMembershipLayoutComponent {

}
