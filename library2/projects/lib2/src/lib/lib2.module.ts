import { NgModule } from '@angular/core';
import { Lib2Component } from './lib2.component';
import { Lib2Routes } from './lib2Routes/lib2Routes.module';
import { Component1Component, Component2Component } from './lib2Routes';



@NgModule({
  declarations: [
    Lib2Component,
    Component1Component,
    Component2Component
  ],
  imports: [Lib2Routes ],
  exports: [
    Lib2Component,
    Component1Component,
    Component2Component
  ]
})
export class Lib2Module { }
