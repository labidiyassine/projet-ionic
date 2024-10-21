import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CircuitDetailPage } from './circuit-detail.page';

describe('CircuitDetailPage', () => {
  let component: CircuitDetailPage;
  let fixture: ComponentFixture<CircuitDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
