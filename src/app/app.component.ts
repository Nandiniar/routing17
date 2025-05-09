import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing17';
  // ROUTING MEANS WAY KE EK PAGE SE DUSRE ME JANE KE
  // iske liye sabse phale app.routes.ts me jaooo

}
