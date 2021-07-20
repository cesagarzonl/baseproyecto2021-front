import { TestBed } from '@angular/core/testing';

import { NotificacionesService } from './notificaciones.service';
import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

describe('NotificacionesService', () => {
  let service: NotificacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[NotificacionesService]
    });
  });

  it('LoginService should be created', () => {
    expect(NotificacionesService).toBeTruthy();
  });
});


