import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightFormPageRoutingModule } from './flight-form-routing.module';

import { FlightFormPage } from './flight-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FlightFormPageRoutingModule
  ],
  declarations: [FlightFormPage]
})
export class FlightFormPageModule {}
