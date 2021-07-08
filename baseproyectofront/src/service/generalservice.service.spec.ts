import { TestBed } from '@angular/core/testing';

import { GeneralserviceService } from './generalservice.service';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../app/core/settings.service'

describe('GeneralserviceService', () => {
  let service: GeneralserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[GeneralserviceService,HttpClient]
    });
  });

  it('GeneralserviceService should be created', () => {
    expect(GeneralserviceService).toBeTruthy();
  });
});