import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Lib2Service {

  constructor() { }
  testServiceLib2() {
    console.log('testServiceLib2');
  }
}
