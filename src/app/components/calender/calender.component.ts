import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventInput } from '@fullcalendar/core';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];
  defaultView = 'timeGridWeek';
  displayDate: Date;
  start: Date;
  end: Date;
  calendarApi;
  public righSideMenuState = 'state1';
  constructor(
    private appointmentService: AppointmentService
  ) { }

  ngOnInit() {
    this.getScheduleAppointments();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.calendarApi = this.calendarComponent.getApi();
      this.setDisplayDate();
      this
    })
  }
  handleDateClick(arg) {
    console.log(arg);
    this.clickHere('state2')
    // if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
    //   this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
    //     title: 'New Event',
    //     start: arg.date,
    //     allDay: arg.allDay
    //   });
    // }
  }


  addEvent() {
    const item = [{ title: 'event 2', date: '2019-04-02' }];
    this.calendarEvents = this.calendarEvents.concat(item);
  }

  modifyTitle(eventIndex, newTitle) {
    const calendarEvents = this.calendarEvents.slice(); // a clone
    const singleEvent = Object.assign({}, calendarEvents[eventIndex]); // a clone
    singleEvent.title = newTitle;
    calendarEvents[eventIndex] = singleEvent;
    this.calendarEvents = calendarEvents; // reassign the array
  }
  eventClick(event) {
    console.log(event);
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
      console.log(res);
    });
  }
}
