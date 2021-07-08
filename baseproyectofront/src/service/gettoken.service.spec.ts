import { TestBed } from '@angular/core/testing';

import { GettokenService } from './gettoken.service';
import { Injectable } from '@angular/core';


describe('GettokenService', () => {
  let service: GettokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[GettokenService]
    });

  });

  it('GettokenService should be created', () => {
    expect(GettokenService).toBeTruthy();
  });
});

