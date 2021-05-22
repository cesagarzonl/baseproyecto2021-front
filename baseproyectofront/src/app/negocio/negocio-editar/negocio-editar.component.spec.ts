import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioEditarComponent } from './negocio-editar.component';

describe('NegocioEditarComponent', () => {
  let component: NegocioEditarComponent;
  let fixture: ComponentFixture<NegocioEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegocioEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegocioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
