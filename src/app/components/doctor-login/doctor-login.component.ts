import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// Update the import path if the service exists elsewhere, for example:
import { LoginDoctorService } from '../../services/login-doctor.service';
// Or create the service if it does not exist using Angular CLI:
// ng generate service services/login-doctor

@Component({
  selector: 'app-doctor-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {
  email = '';
  password = '';
  mensaje = '';

  constructor(private loginService: LoginDoctorService, private router: Router) {}

  login() {
    const data = {
      email: this.email,
      password: this.password
    };

    this.loginService.login(data).subscribe(res => {
      if (res.success) {
        localStorage.setItem('doctor_id', res.doctor_id);
        localStorage.setItem('doctor_nombre', res.nombre);
        this.router.navigate(['/doctor']);
      } else {
        this.mensaje = res.message;
      }
    });
  }
}
