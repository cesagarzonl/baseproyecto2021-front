import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesComponent } from './mensajes.component';

import {MatSnackBar} from "@angular/material/snack-bar";
describe('MensajesComponent test', () => {
  let component: MensajesComponent;
  let fixture: ComponentFixture<MensajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajesComponent ],
      imports:[MatSnackBar]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
