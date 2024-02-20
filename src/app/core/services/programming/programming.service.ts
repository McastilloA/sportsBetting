import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { Programming } from '@core/interfaces/programming.interface';
import { Calendar } from '@core/interfaces/calendar.interface';

interface State {
  data: Programming[]
}


@Injectable({
  providedIn: 'root'
})
export class ProgrammingService {

  /** Variabls globales */
  #url = environment;
  #http = inject(HttpClient);

  getAllMatches(date: string): Observable<Programming> {
    return this.#http.get<Programming>(`${this.#url.baseUrl}/${this.#url.ctlrProgramming}/2/0/0/0/0/${date}`);
  }

  getAllCalendar(numberDate: number): Observable<Calendar> {
    return this.#http.get<Calendar>(`${this.#url.baseUrl}/${this.#url.ctlrCalendar}/fechas/0/${numberDate}`);
  }

}
