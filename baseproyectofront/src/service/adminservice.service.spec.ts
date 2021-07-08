import { TestBed } from '@angular/core/testing';

import { AdminserviceService } from './adminservice.service';
import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders  } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SettingsService } from '../app/core/settings.service'
import { GettokenService } from './gettoken.service'



describe('AdminserviceService', () => {
  let service: AdminserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[AdminserviceService,HttpClient]
  });
    it('Admin service should be created', () => {
      expect(AdminserviceService).toBeTruthy();
    });
  })
})

