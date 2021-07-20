import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDetalleComponent } from './producto-detalle.component';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

describe('ProductoDetalleComponent test', () => {
  let component: ProductoDetalleComponent;
  let fixture: ComponentFixture<ProductoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoDetalleComponent,HttpClient ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
