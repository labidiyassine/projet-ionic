import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CircuitManagementPageRoutingModule } from './circuit-management-routing.module';

import { CircuitManagementPage } from './circuit-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CircuitManagementPageRoutingModule
  ],
  declarations: [CircuitManagementPage]
})
export class CircuitManagementPageModule {}
