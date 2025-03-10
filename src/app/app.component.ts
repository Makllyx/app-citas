import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <footer class="bg-dark text-white mt-5 py-3">
      <div class="container text-center">
        <p>&copy; 2025 App de Citas. Todos los derechos reservados.</p>
      </div>
    </footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App de Citas';
}