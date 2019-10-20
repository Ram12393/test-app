import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

interface SelectedDate {
  month: number;
  day: number;
  year: number;
}
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(
    private http: HttpService
  ) { }

  getScheduledAppointments(): Observable<any> {
    return this.http.get(`api/schedule?paginate=true&page_size=10&page=1%27`);
  }
  getScheduleDateAppointment(data: SelectedDate): Observable<any> {
    return this.http.get(`api/schedule?month=${data.month}&day=${data.day}&year=${data.year}`);
  }
  deleteScheduleAppointment(scheduleID: number): Observable<any> {
    return this.http.delete(`api/schedule?schedule_id=${scheduleID}`);
  }
}
