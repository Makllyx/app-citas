import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  nombre = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedName = localStorage.getItem('doctor_nombre');
    if (!storedName) {
      this.router.navigate(['/login-doctor']);
    } else {
      this.nombre = storedName;
    }
  }

  logout() {
    localStorage.removeItem('doctor_id');
    localStorage.removeItem('doctor_nombre');
    this.router.navigate(['/login-doctor']);
  }
}

