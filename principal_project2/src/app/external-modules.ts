import { NgModule } from "@angular/core";

import { Lib2Module } from "lib2";
console.log({ Lib2Module })

@NgModule({
    imports: [Lib2Module]
})
export class Lib2ModuleWrapper { } 
