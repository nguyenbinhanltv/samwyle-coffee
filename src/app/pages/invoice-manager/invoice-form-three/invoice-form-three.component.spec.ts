import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFormThreeComponent } from './invoice-form-three.component';

describe('InvoiceFormThreeComponent', () => {
  let component: InvoiceFormThreeComponent;
  let fixture: ComponentFixture<InvoiceFormThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceFormThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceFormThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
