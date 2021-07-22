import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }
  //public static host =  'https://shielded-atoll-87422.herokuapp.com/';
  public static host =  'http://localhost:3000/';
}
