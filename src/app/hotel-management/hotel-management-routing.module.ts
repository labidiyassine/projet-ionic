import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelManagementPage } from './hotel-management.page';

const routes: Routes = [
  {
    path: '',
    component: HotelManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelManagementPageRoutingModule {}
