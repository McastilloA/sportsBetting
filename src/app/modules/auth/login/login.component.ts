import { Component } from '@angular/core';

import { ComingSoonComponent } from '@shared/components/comingSoon/comingSoon.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ComingSoonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
