import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFormOneComponent } from './invoice-form-one.component';

describe('InvoiceFormOneComponent', () => {
  let component: InvoiceFormOneComponent;
  let fixture: ComponentFixture<InvoiceFormOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceFormOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceFormOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
