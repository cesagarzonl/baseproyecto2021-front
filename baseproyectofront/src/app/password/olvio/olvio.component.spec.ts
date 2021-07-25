import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvioComponent } from './olvio.component';

describe('OlvioComponent', () => {
  let component: OlvioComponent;
  let fixture: ComponentFixture<OlvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
