import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionRoutingModule } from './position-routing.module';
import { PositionComponent } from './components/position.component';


@NgModule({
  imports: [
    CommonModule,
    PositionRoutingModule,
    PositionComponent
  ]
})
export class PositionModule { }
