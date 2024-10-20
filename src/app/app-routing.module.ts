import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HotelFormComponent } from './hotel-form/hotel-form.component';
import { FlightFormPage } from './flight-form/flight-form.page';
import { CircuitFormPage } from './circuit-form/circuit-form.page';
import { CircuitDetailPage } from './circuit-detail/circuit-detail.page';
const routes: Routes = [
  { path: 'flight-form/:id', component: FlightFormPage },
  { path: 'circuit-form/:id', component: CircuitFormPage }, 
  { path: 'circuit/:id', component: CircuitDetailPage },
  { path: 'hotel-form/:id', component: HotelFormComponent }, 
  { path: 'hotel-form', component: HotelFormComponent },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'management',
    loadChildren: () => import('./management/management.module').then(m => m.ManagementPageModule)
  },
  {
    path: 'hotel-management',
    loadChildren: () => import('./hotel-management/hotel-management.module').then(m => m.HotelManagementPageModule)
  },
  {
    path: 'flight-form',
    loadChildren: () => import('./flight-form/flight-form.module').then(m => m.FlightFormPageModule)
  },
  {
    path: 'flight-management',
    loadChildren: () => import('./flight-management/flight-management.module').then(m => m.FlightManagementPageModule)
  },
  {
    path: 'circuit-management',
    loadChildren: () => import('./circuit-management/circuit-management.module').then(m => m.CircuitManagementPageModule)
  },
  {
    path: 'circuit-form',
    loadChildren: () => import('./circuit-form/circuit-form.module').then(m => m.CircuitFormPageModule)
  },
  {
    path: 'hotel',
    loadChildren: () => import('./hotel/hotel.module').then( m => m.HotelPageModule)
  },
  {
    path: 'circuit',
    loadChildren: () => import('./circuit/circuit.module').then( m => m.CircuitPageModule)
  },
  {
    path: 'flight',
    loadChildren: () => import('./flight/flight.module').then( m => m.FlightPageModule)
  },
  {
    path: 'circuit-detail',
    loadChildren: () => import('./circuit-detail/circuit-detail.module').then( m => m.CircuitDetailPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
