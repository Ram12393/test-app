import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventInput } from '@fullcalendar/core';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { AppointmentService } from 'src/app/services/appointment.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit, AfterViewInit {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarEvents: EventInput[] = [];
  defaultView = 'dayGridMonth';
  displayDate: Date;
  start: Date;
  end: Date;
  selectedDateDetails: any;
  calendarApi;
  public righSideMenuState = 'state1';
  constructor(
    private appointmentService: AppointmentService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getScheduleAppointments();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.calendarApi = this.calendarComponent.getApi();
      this.setDisplayDate();
    });
  }

  handleDateClick(arg) {
    this.getScheduleDateDetails(arg.date);
    this.clickHere('state2');

  }


  eventClick(event) {
    console.log(this.calendarComponent.getApi());
  }
  nextDate() {
    this.calendarApi.next();
    this.setDisplayDate();
  }
  prevDate() {
    this.calendarApi.prev();
    this.setDisplayDate();
  }
  onChange(value) {
    this.defaultView = value;
    this.calendarApi.changeView(value);
    this.calendarApi.next();
    this.setDisplayDate();
  }
  setDisplayDate() {
    this.start = this.calendarApi.view.activeStart;
    this.end = this.calendarApi.view.activeEnd;
    this.displayDate = this.calendarApi.getDate()
  }

  private clickHere(state) {
    this.righSideMenuState = state;
  }

  public get HideRightSideMenu() {
    return this.hideBenefits.bind(this);
  }

  private hideBenefits() {
    this.righSideMenuState = 'state1';
  }

  getScheduleAppointments() {
    this.appointmentService.getScheduledAppointments().subscribe(res => {
      res.result.map(el => {
        el.title = el.detail.reason;
      });
      this.calendarEvents = [...res.result];
    });
  }

  getScheduleDateDetails(selectedDate) {
    const date = {
      day: new Date(selectedDate).getDate(),
      year: new Date(selectedDate).getFullYear(),
      month: new Date(selectedDate).getMonth() + 1
    };
    this.appointmentService.getScheduleDateAppointment(date).subscribe(res => {
      this.selectedDateDetails = res;
    });
  }

  deleteSchedule(id) {
    this.appointmentService.deleteScheduleAppointment(id).subscribe(res => {
      this.snackBar.open(res.message, '', {
        duration: 2000
      });
      this.getScheduleAppointments();
      this.righSideMenuState = 'state1';
    });
  }
}
