import { RouterModule, Routes } from "@angular/router";
import { MainComponentComponent } from "./main-component/main-component.component";
import { ModuleWithProviders } from "@angular/core";

export let routes: Routes = [
    {
        path: '',
        component: MainComponentComponent,
        children: [
            { path: 'lib2', loadChildren: () => import('./external-modules').then(m => m.Lib2ModuleWrapper) },
        ]
    }]

export const LayoutRoutes: ModuleWithProviders<any> = RouterModule.forChild(routes);