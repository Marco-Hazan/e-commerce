import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProdottoComponent } from './form-prodotto.component';

describe('FormProdottoComponent', () => {
  let component: FormProdottoComponent;
  let fixture: ComponentFixture<FormProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProdottoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
