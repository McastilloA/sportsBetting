import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'programming',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth-routing.module').then(m => m.AuthRoutingModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home-routing.module').then(m => m.HomeRoutingModule)
  },
  {
    path: 'position',
    loadChildren: () => import('./modules/position/position-routing.module').then(m => m.PositionRoutingModule)
  },
  {
    path: 'programming',
    loadChildren: () => import('./modules/programming/programming-routing.module').then(m => m.ProgrammingRoutingModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./modules/calendar/calendar-routing.module').then(m => m.CalendarRoutingModule)
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
