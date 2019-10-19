import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(
    private http: HttpService
  ) { }

  getScheduledAppointments(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Access-Token': token
    });
    return this.http.get('api/schedule?paginate=true&page_size=10&page=1');
  }
}
