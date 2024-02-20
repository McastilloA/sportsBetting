import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  template: `
    <h2 class="my-2 font-extrabold tracking-wide leading-normal 
      text-green-700 text-center text-4xl">
      {{title}}
    </h2>
  `,
  styles: ``
})
export class TitleComponent {

  /** Variables globales*/
  @Input() title!: string;
}
