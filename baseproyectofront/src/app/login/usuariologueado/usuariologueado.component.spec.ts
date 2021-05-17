import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariologueadoComponent } from './usuariologueado.component';

describe('UsuariologueadoComponent', () => {
  let component: UsuariologueadoComponent;
  let fixture: ComponentFixture<UsuariologueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariologueadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariologueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
