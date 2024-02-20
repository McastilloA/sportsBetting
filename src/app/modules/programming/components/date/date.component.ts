import { JsonPipe } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { Calendar } from '@core/interfaces/calendar.interface';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {

  /** Variabls globales */
  @Input() listCalendar!: Calendar[];
  @ViewChild('sliderContent') sliderContent!: ElementRef;
  @Output() eventDate = new EventEmitter<string>();
  @Input() dateSelected!: string;

  scrollRight(): void {
    this.sliderContent.nativeElement.scrollTo({
      left: (this.sliderContent.nativeElement.scrollLeft + 150),
      behavior: 'smooth'
    });
  }

  scrollLeft(): void {
    this.sliderContent.nativeElement.scrollTo({
      left: (this.sliderContent.nativeElement.scrollLeft - 150),
      behavior: 'smooth'
    });
  }

  dateOnclick(evt: Calendar) {
    this.eventDate.emit(evt.fecha);
    this.filterDateComplete(evt.fecha);
  }

  filterDateComplete(date: string): string | null {
    this.dateSelected = date;
    return this.listCalendar.flat().filter(res => res.fecha === date)[0]?.fechaTextoAux;
  }
  
}
