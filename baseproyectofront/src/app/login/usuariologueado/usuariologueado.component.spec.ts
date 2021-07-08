import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariologueadoComponent } from './usuariologueado.component';
import { MatMenuModule} from '@angular/material/menu';

describe('UsuariologueadoComponent test', () => {
  let component: UsuariologueadoComponent;
  let fixture: ComponentFixture<UsuariologueadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatMenuModule],
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
