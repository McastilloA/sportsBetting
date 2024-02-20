import { Component } from '@angular/core';

import { ComingSoonComponent } from '@shared/components/comingSoon/comingSoon.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ComingSoonComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

}
