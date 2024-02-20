import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  template: `
    <section class="container mx-auto p-40">
      <div class="w-full p-10 border rounded-lg shadow-md sm:p-8 dark:bg-gray-200 
      dark:border-gray-300">
        <i class="flex items-center justify-center">
          <svg class="w-20 h-20 text-green-800 fill-current" aria-hidden="true" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4a1 1 0 1 0-2 0v4c0 .3.1.5.3.7l3 3a1 1 0 0 0 1.4-1.4L13 11.6V8Z" />
          </svg>
        </i>
        <h2 class="mb-2 text-center text-5xl font-bold text-green-800">
          Coming soon
        </h2>
        <p class="mb-5 text-xl text-center text-green-800">
          Soon you will find a view where you can find news of {{text}}.
        </p>
      </div>
    </section>
  `
})
export class ComingSoonComponent {

  /** Variables globales*/
  @Input() text!: string;
}
