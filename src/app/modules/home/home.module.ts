import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home.component';
import { NewAppoinmentComponent } from 'src/app/components/new-appoinment/new-appoinment.component';
import { CalenderComponent } from 'src/app/components/calender/calender.component';
import { LeftSideMenuComponent } from 'src/app/components/shared/left-side-menu/left-side-menu.component';
import { RightSideMenuComponent } from 'src/app/components/shared/right-side-menu/right-side-menu.component';
import { HeaderComponent } from 'src/app/components/shared/header/header.component';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    RightSideMenuComponent,
    LeftSideMenuComponent,
    CalenderComponent,
    NewAppoinmentComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FullCalendarModule
  ]
})
export class HomeModule { }
