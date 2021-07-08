import { TestBed } from '@angular/core/testing';

import { ChangeloginServiceService } from './changelogin-service.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

describe('ChangeloginServiceService', () => {
  let service: ChangeloginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[ChangeloginServiceService,HttpClient]
    });
  });

  it('ChangeloginServiceService should be created', () => {
    expect(ChangeloginServiceService).toBeTruthy();
  });
});


