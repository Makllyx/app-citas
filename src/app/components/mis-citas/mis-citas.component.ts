import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mis-citas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mis-citas.component.html',
  styleUrls: ['./mis-citas.component.css']
})
export class MisCitasComponent implements OnInit {
  citas: any[] = [];
  usuario: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.usuario = localStorage.getItem('usuarioLogueado');

    if (!this.usuario) {
      alert('Debes iniciar sesión.');
      this.router.navigate(['/iniciar-sesion']);
      return;
    }

    try {
      const todasCitas = JSON.parse(localStorage.getItem('citas') || '[]');
      this.citas = todasCitas.filter((c: any) => c.usuario === this.usuario);
    } catch (error) {
      console.error('Error leyendo las citas del localStorage:', error);
      this.citas = [];
    }
  }

  eliminarCita(index: number): void {
    const citaAEliminar = this.citas[index];

    try {
      const todasLasCitas = JSON.parse(localStorage.getItem('citas') || '[]');
      const nuevasCitas = todasLasCitas.filter(
        (cita: any) =>
          !(cita.usuario === citaAEliminar.usuario &&
            cita.fecha === citaAEliminar.fecha &&
            cita.hora === citaAEliminar.hora &&
            cita.doctor === citaAEliminar.doctor)
      );

      localStorage.setItem('citas', JSON.stringify(nuevasCitas));
      this.citas.splice(index, 1);
    } catch (error) {
      console.error('Error al eliminar la cita:', error);
      alert('Ocurrió un error al intentar eliminar la cita.');
    }
  }

  cerrarSesion(): void {
    localStorage.removeItem('usuarioLogueado');
    alert('Sesión cerrada.');
    this.router.navigate(['/iniciar-sesion']);
  }
}

