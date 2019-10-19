import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-right-side-menu',
  templateUrl: './right-side-menu.component.html',
  styleUrls: ['./right-side-menu.component.scss'],
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
export class RightSideMenuComponent implements OnInit {
  @Input() currentState: string;
  @Input() hideMenu: Function;
  constructor() { }

  ngOnInit() {
  }

}
