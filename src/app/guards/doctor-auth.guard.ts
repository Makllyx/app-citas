import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DoctorAuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const tipoUsuario = localStorage.getItem('tipoUsuario');
    if (tipoUsuario === 'doctor') {
      return true;
    } else {
      alert('Acceso solo para doctores.');
      this.router.navigate(['/iniciar-sesion']);
      return false;
    }
  }
}


