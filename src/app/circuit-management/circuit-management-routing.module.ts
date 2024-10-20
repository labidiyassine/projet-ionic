import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircuitManagementPage } from './circuit-management.page';

const routes: Routes = [
  {
    path: '',
    component: CircuitManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircuitManagementPageRoutingModule {}
