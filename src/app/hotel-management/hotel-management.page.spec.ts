import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelManagementPage } from './hotel-management.page';

describe('HotelManagementPage', () => {
  let component: HotelManagementPage;
  let fixture: ComponentFixture<HotelManagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
