import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent {
especialidades: any;
onEspecialidadChange($event: Event) {
throw new Error('Method not implemented.');
}
  doctor = {
    nombre: '',
    email: '',
    password: '',
    especialidad: ''
  };
  mensaje = '';

  constructor(private http: HttpClient, private router: Router) {}

  registrar() {
    this.http.post<any>('http://localhost/api/registro_doctor.php', this.doctor)
      .subscribe(res => {
        if (res.success) {
          this.router.navigate(['/login-doctor']);
        } else {
          this.mensaje = res.message;
        }
      });
  }
}
