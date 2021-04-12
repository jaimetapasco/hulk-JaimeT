import { from } from "rxjs";
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoComponent} from './components/demo/demo.component';
import {DemoRouterModule} from './demo-routing.module';
import {SharedModule} from './../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './../material/material.module';

@NgModule({
    declarations: [
        DemoComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        DemoRouterModule,
        FormsModule,
        MaterialModule
    ]

})

export class DemoModule{}