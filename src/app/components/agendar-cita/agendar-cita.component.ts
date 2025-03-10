import { Component } from '@angular/core';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent {
  // Lista de doctores
  doctors = ['Dr. Juan Pérez', 'Dr. Ana Gómez', 'Dr. Luis Rodríguez', 'Dr. Mariana López'];

  // Lista de especialidades
  especialidades = ['Cardiología', 'Dermatología', 'Pediatría', 'Neurología'];

  // Lista de horas disponibles para citas
  horasDisponibles = ['08:00', '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00'];

  // Variables para almacenar los valores seleccionados
  selectedDoctor: string = this.doctors[0];  // Doctor predeterminado
  selectedEspecialidad: string = this.especialidades[0];  // Especialidad predeterminada
  fechaCita: string = '';  // Fecha de la cita
  horaCita: string = this.horasDisponibles[0];  // Hora predeterminada

  // Método que se llama cuando se cambia el doctor
  onDoctorChange(event: any): void {
    this.selectedDoctor = event.target.value;
    console.log("Doctor seleccionado:", this.selectedDoctor);
  }

  // Método que se llama cuando se cambia la especialidad
  onEspecialidadChange(event: any): void {
    this.selectedEspecialidad = event.target.value;
    console.log("Especialidad seleccionada:", this.selectedEspecialidad);
  }

  // Método para manejar el cambio de fecha
  onFechaChange(event: any): void {
    this.fechaCita = event.target.value;
    console.log("Fecha seleccionada:", this.fechaCita);
  }

  // Método que se llama cuando se cambia la hora
  onHoraChange(event: any): void {
    this.horaCita = event.target.value;
    console.log("Hora seleccionada:", this.horaCita);
  }
}


