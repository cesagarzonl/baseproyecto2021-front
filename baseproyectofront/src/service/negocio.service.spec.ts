import { TestBed } from '@angular/core/testing';

import { NegocioService } from './negocio.service';

import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders  } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SettingsService } from '../app/core/settings.service'
import { GettokenService } from './gettoken.service'

describe('NegocioService', () => {
  let service: NegocioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[NegocioService,HttpClient]
    });
  });

  it('NegocioService should be created', () => {
    expect(NegocioService).toBeTruthy();
  });
});

