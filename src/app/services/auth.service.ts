import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post<any>('https://api.escuelajs.co/api/v1/users/', data);
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(
      'https://api.escuelajs.co/api/v1/auth/login',
      data
    );
  }

  logout() {
    localStorage.clear();
  }

  checkToken(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
