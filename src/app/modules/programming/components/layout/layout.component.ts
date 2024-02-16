import { Component } from '@angular/core';
import { MatchComponent } from '../match/match.component';
import { DateComponent } from '../date/date.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [DateComponent, MatchComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
