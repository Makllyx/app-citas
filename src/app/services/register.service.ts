import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost/api/registrar.php';

  constructor(private http: HttpClient) {}

  register(userData: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}

