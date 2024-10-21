import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelManagementPageRoutingModule } from './hotel-management-routing.module';

import { HotelManagementPage } from './hotel-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelManagementPageRoutingModule
  ],
  declarations: [HotelManagementPage]
})
export class HotelManagementPageModule {}
