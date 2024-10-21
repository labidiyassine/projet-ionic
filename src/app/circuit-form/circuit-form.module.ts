import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { IonicModule } from '@ionic/angular';

import { CircuitFormPageRoutingModule } from './circuit-form-routing.module';

import { CircuitFormPage } from './circuit-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CircuitFormPageRoutingModule
  ],
  declarations: [CircuitFormPage]
})
export class CircuitFormPageModule {}
