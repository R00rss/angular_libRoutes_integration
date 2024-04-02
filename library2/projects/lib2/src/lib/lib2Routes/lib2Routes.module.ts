import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

const routes: Routes = [
    { path: 'rute1', component: Component1Component },
    { path: 'rute2', component: Component2Component },
];

export const routerModuleForChild = RouterModule.forChild(routes)

@NgModule({
    imports: [routerModuleForChild],
    exports: [RouterModule]
})
export class Lib2Routes { }
