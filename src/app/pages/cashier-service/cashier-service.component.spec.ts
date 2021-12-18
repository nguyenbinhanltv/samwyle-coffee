import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierServiceComponent } from './cashier-service.component';

describe('CashierServiceComponent', () => {
  let component: CashierServiceComponent;
  let fixture: ComponentFixture<CashierServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashierServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
