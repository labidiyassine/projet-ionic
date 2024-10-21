import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightManagementPageRoutingModule } from './flight-management-routing.module';

import { FlightManagementPage } from './flight-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightManagementPageRoutingModule
  ],
  declarations: [FlightManagementPage]
})
export class FlightManagementPageModule {}
