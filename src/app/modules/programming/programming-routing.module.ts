import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: ':id', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgrammingRoutingModule { }
