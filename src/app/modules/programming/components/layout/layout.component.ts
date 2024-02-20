import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { MatchComponent } from '../match/match.component';
import { DateComponent } from '../date/date.component';
import { ProgrammingService } from '@core/services/programming/programming.service';
import { Programming } from '@core/interfaces/programming.interface';
import { Calendar } from '@core/interfaces/calendar.interface';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DateComponent, MatchComponent, TitleComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  /** Variabls globales */
  #programmingService = inject(ProgrammingService);
  #unSubscribe$ = new Subject<void>();
  #stateProgramming = signal<Programming[]>([]);
  #stateDates = signal<Calendar[]>([]);
  currentItemPro = computed(() => this.#stateProgramming());
  currentItemCalendar = computed(() => this.#stateDates());
  dInit = '20240127';
  #vInit = 3;

  ngOnInit(): void {
    this.AllListMatch(this.dInit);
    this.AllDates(this.#vInit)
  }

  AllListMatch(date: string) {
    this.#programmingService.getAllMatches(date).pipe(takeUntil(this.#unSubscribe$))
      .subscribe({
        next: (res) => this.successPro(res),
        error: (err) => this.handleError(err)
      })
  }

  AllDates(numberDate: number) {
    this.#programmingService.getAllCalendar(numberDate).pipe(takeUntil(this.#unSubscribe$))
      .subscribe({
        next: (res) => this.successCalendar(res),
        error: (err) => this.handleError(err)
      })
  }

  successPro(res: Programming) {
    this.#stateProgramming.set([res]);
  }

  successCalendar(res: Calendar) {
    this.#stateDates.set([res]);
  }

  handleError(err: any) {
    console.error('Error in service', err);
  }

  dateOnchange(date: string) {
    this.AllListMatch(date);
  }

}
