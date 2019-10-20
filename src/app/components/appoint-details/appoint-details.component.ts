import { Component, OnInit, Input, SimpleChanges, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AppointmentService } from 'src/app/services/appointment.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-appoint-details',
  templateUrl: './appoint-details.component.html',
  styleUrls: ['./appoint-details.component.scss'],
  animations: [
    trigger('amenitiesanimations',
      [
        state('state1',
          style(
            {
              height: 0,
              opacity: 0,
              transform: 'translateY(100vh)',
              overflow: 'hidden'
            }
          )
        ),
        state('state2',
          style(
            {
              height: '*',
              opacity: 1,
              transform: 'translateY(0)'
            }
          )
        ),
        transition('state1 <=> state2', animate('0.3s'))
      ]
    )
  ]
})
export class AppointDetailsComponent implements OnInit {
  @Input() currentState: string;
  @Input() hideMenu: Function;
  @Input() selectedDateDetails: any;
  @Output() deleteSchedule: EventEmitter<any> = new EventEmitter();

  constructor(
    private appointmentService: AppointmentService
  ) { }

  ngOnInit() {
  }

  delete(id) {
    this.deleteSchedule.emit(id);
  }

}
