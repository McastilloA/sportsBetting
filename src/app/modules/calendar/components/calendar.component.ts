import { Component } from '@angular/core';

import { ComingSoonComponent } from '@shared/components/comingSoon/comingSoon.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [ComingSoonComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

}
