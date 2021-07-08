import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCrearComponent } from './producto-crear.component';
import { FormBuilder,Validators,FormArray, FormGroup} from '@angular/forms';

describe('ProductoCrearComponent', () => {
  let component: ProductoCrearComponent;
  let fixture: ComponentFixture<ProductoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoCrearComponent,FormBuilder,Validators ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
