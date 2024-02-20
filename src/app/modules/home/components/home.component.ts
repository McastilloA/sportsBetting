import { Component } from '@angular/core';

import { ComingSoonComponent } from '@shared/components/comingSoon/comingSoon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ComingSoonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
