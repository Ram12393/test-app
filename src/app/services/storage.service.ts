import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  values: any;

  constructor() { }

  set(key, data) {
    localStorage.setItem(key, data);
  }
  get(key) {
    return localStorage.getItem(key);
  }

  getItem(key) {
    return localStorage.getItem(key);
  }


  removeItem(key) {
    localStorage.removeItem(key);
  }
}
