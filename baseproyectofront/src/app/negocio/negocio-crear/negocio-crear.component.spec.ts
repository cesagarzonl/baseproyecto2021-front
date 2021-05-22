import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioCrearComponent } from './negocio-crear.component';

describe('NegocioCrearComponent', () => {
  let component: NegocioCrearComponent;
  let fixture: ComponentFixture<NegocioCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegocioCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegocioCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
