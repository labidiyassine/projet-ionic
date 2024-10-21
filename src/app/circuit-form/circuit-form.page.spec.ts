import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CircuitFormPage } from './circuit-form.page';

describe('CircuitFormPage', () => {
  let component: CircuitFormPage;
  let fixture: ComponentFixture<CircuitFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
