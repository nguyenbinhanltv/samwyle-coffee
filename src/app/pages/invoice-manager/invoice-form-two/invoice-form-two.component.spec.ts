import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFormTwoComponent } from './invoice-form-two.component';

describe('InvoiceFormTwoComponent', () => {
  let component: InvoiceFormTwoComponent;
  let fixture: ComponentFixture<InvoiceFormTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceFormTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
