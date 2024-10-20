import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CircuitPage } from './circuit.page';

describe('CircuitPage', () => {
  let component: CircuitPage;
  let fixture: ComponentFixture<CircuitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
