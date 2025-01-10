import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderSmartComponent } from './header/header.smart.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderSmartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'productivity-planner';
}