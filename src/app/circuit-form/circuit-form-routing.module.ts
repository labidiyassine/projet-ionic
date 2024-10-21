import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircuitFormPage } from './circuit-form.page';

const routes: Routes = [
  {
    path: '',
    component: CircuitFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircuitFormPageRoutingModule {}
