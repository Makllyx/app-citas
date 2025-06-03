import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendar-cita',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent {
  doctors = [
  'Dr. Raúl Gómez',
  'Dra. Claudia López',
  'Dr. Manuel Turizo',
  'Dra. Laura González',
  'Dra. Kelly Palomares'
];

especialidades = [
  'Cardiología',
  'Dermatología',
  'Pediatría',
  'Neurología',
  'Cirugía'
];

horasDisponibles = [
  '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00',
  '17:00', '18:00', '19:00'
];


  selectedDoctor: string = this.doctors[0];
  selectedEspecialidad: string = this.especialidades[0];
  fechaCita: string = '';
  horaCita: string = this.horasDisponibles[0];

  constructor(private router: Router) {}

  onDoctorChange(event: any): void {
    this.selectedDoctor = event.target.value;
  }

  onEspecialidadChange(event: any): void {
    this.selectedEspecialidad = event.target.value;
  }

  onFechaChange(event: any): void {
    this.fechaCita = event.target.value;
  }

  onHoraChange(event: any): void {
    this.horaCita = event.target.value;
  }

  agendarCita(): void {
    const usuarioLogueado = localStorage.getItem('usuarioLogueado');
    if (!usuarioLogueado) {
      alert('Debes iniciar sesión o registrarte para agendar una cita.');
      this.router.navigate(['/registrarse']);
      return;
    }

    const citasGuardadas = JSON.parse(localStorage.getItem('citas') || '[]');

    citasGuardadas.push({
      usuario: usuarioLogueado,
      doctor: this.selectedDoctor,
      especialidad: this.selectedEspecialidad,
      fecha: this.fechaCita,
      hora: this.horaCita
    });

    localStorage.setItem('citas', JSON.stringify(citasGuardadas));

    alert('Cita agendada con éxito.');
    this.router.navigate(['/mis-citas']);
  }
}
