import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { }

  login(data: Auth): Observable<any> {
    return this.http.post('login', data);
  }

  logout() {
    localStorage.removeItem('token');
  }
  getToken() {
    localStorage.getItem('token');
  }
}
