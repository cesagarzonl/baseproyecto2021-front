import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioListarComponent } from './negocio-listar.component';

describe('NegocioListarComponent', () => {
  let component: NegocioListarComponent;
  let fixture: ComponentFixture<NegocioListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegocioListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegocioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
