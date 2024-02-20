import { Component } from '@angular/core';

import { ComingSoonComponent } from '@shared/components/comingSoon/comingSoon.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ComingSoonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
