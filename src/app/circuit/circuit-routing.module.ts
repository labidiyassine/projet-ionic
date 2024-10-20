import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircuitPage } from './circuit.page';

const routes: Routes = [
  {
    path: '',
    component: CircuitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircuitPageRoutingModule {}
