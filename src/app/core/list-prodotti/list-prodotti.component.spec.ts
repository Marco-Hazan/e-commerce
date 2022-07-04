import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProdottiComponent } from './list-prodotti.component';

describe('ListProdottiComponent', () => {
  let component: ListProdottiComponent;
  let fixture: ComponentFixture<ListProdottiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProdottiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
