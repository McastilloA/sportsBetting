import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgrammingRoutingModule } from './programming-routing.module';

import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProgrammingRoutingModule
  ]
})
export class ProgrammingModule { }
