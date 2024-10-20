import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightManagementPage } from './flight-management.page';

describe('FlightManagementPage', () => {
  let component: FlightManagementPage;
  let fixture: ComponentFixture<FlightManagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
