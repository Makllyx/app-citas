import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center mt-5">
      <h2>Bienvenido, Doctor {{ nombreDoctor }}</h2>
      <button class="btn btn-danger mt-3" (click)="cerrarSesion()">Cerrar sesión</button>
    </div>
  `,
  styles: [`
    .text-center {
      text-align: center;
    }
  `]
})
export class DoctorComponent {
  nombreDoctor = localStorage.getItem('nombreUsuario');

  constructor(private router: Router) {}

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/inicio']);
  }
}
