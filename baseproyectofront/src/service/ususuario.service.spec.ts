import { TestBed } from '@angular/core/testing';

import { UsusuarioService } from './ususuario.service';

import { Injectable  } from '@angular/core';


import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { SettingsService } from '../app/core/settings.service'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { GettokenService } from './gettoken.service'


describe('UsusuarioService', () => {
  let service: UsusuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[HttpClient,UsusuarioService]
    });
  });

  it('UsusuarioService should be created', () => {
    expect(UsusuarioService).toBeTruthy();
  });
});