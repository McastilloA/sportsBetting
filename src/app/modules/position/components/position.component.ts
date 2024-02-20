import { Component } from '@angular/core';

import { ComingSoonComponent } from '@shared/components/comingSoon/comingSoon.component';

@Component({
  selector: 'app-position',
  standalone: true,
  imports: [ComingSoonComponent],
  templateUrl: './position.component.html',
  styleUrl: './position.component.css'
})
export class PositionComponent {

}
