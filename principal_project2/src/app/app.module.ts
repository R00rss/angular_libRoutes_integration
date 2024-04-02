import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';

@NgModule({
  declarations: [AppComponent, MainComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutRoutes,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
