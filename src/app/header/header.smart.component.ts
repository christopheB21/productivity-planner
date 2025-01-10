import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.smart.component.html',
  styleUrl: './header.smart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderSmartComponent {

}
