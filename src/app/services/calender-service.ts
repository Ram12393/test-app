import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CalendarService {
    constructor(private http: HttpService) { }

}
