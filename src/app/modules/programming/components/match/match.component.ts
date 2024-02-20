import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

import { Programming } from '@core/interfaces/programming.interface';

@Component({
  selector: 'app-match',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './match.component.html',
  styleUrl: './match.component.css'
})
export class MatchComponent implements OnChanges {

  /** Variabls globales */
  @Input() listMatches!: Programming[];
  matches!: Programming[];
  idStadium = 1;

  ngOnChanges(): void {
    this.filterStadium(this.idStadium);
  }

  getColor(type: string, color: string): string {
    return `${type}-[${color}]`
  }

  getImage(img: string | null): string {
    return img ? `data:image/png;base64,${img}` : 'https://placehold.co/48x58?text=No+Image'
  }

  filterStadium(idEstadio: number): void {
    this.matches = this.listMatches.flat().filter(res => res.idEstadio === idEstadio);
  }

}
