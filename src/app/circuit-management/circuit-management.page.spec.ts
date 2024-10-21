import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CircuitManagementPage } from './circuit-management.page';

describe('CircuitManagementPage', () => {
  let component: CircuitManagementPage;
  let fixture: ComponentFixture<CircuitManagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
