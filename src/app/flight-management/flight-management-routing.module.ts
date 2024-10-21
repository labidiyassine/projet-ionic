import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightManagementPage } from './flight-management.page';

const routes: Routes = [
  {
    path: '',
    component: FlightManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightManagementPageRoutingModule {}
