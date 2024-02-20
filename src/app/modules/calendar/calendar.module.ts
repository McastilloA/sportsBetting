import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './components/calendar.component';

@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
    CalendarComponent
  ]
})
export class CalendarModule { }
