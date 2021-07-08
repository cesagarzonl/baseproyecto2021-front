import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { Injectable  } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../app/core/settings.service'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[HttpClient,LoginService]
    });

  });

  it('GettokenService should be created', () => {
    expect(LoginService).toBeTruthy();
  });
});