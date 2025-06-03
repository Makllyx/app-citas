import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

 onSubmit() {
  this.submitted = true;

  if (this.loginForm.invalid) {
    return;
  }

  const credentials = this.loginForm.value;

  this.loginService.login(credentials).subscribe(response => {
    if (response.success) {
      // Guarda el email en localStorage
      localStorage.setItem('usuarioLogueado', credentials.email);
      this.router.navigate(['/mis-citas']);
    } else {
      alert('Credenciales incorrectas');
    }
  }, error => {
    console.error('Error al conectar con el servidor:', error);
    alert('Error al conectar con el servidor');
  });
}



}


