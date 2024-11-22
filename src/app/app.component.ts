import { Component } from '@angular/core';
import { environment } from "../environments/environment"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'productivity-planner';
  isProduction = environment.production;
  name = environment.name;
}
