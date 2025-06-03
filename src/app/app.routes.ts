import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AgendarCitaComponent } from './components/agendar-cita/agendar-cita.component';
import { MisCitasComponent } from './components/mis-citas/mis-citas.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'acerca-de', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'registrarse', component: RegisterComponent },
  { path: 'agendar-cita', component: AgendarCitaComponent },
  { path: 'mis-citas', component: MisCitasComponent },
  { path: '**', redirectTo: '/inicio' }
];

