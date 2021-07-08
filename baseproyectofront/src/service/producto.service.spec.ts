import { TestBed } from '@angular/core/testing';

import { ProductoService } from './producto.service';
import { Injectable  } from '@angular/core';


import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { SettingsService } from '../app/core/settings.service'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { GettokenService } from './gettoken.service'

describe('ProductoService', () => {
  let service: ProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[HttpClient,ProductoService]
    });

  });

  it('ProductoService should be created', () => {
    expect(ProductoService).toBeTruthy();
  });
});

