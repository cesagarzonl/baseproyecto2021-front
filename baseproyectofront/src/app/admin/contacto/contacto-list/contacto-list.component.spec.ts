import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoListComponent } from './contacto-list.component';
import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../../../../service/adminservice.service'

import { PageEvent } from '@angular/material/paginator';



describe('ContactoListComponent', () => {
  let component: ContactoListComponent;
  let fixture: ComponentFixture<ContactoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
