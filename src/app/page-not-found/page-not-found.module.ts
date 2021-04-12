import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { PageNotFoundComponent } from './componets/page-not-found/page-not-found.component';
import {SharedModule} from './../shared/shared.module';
import {PageNotFountRoutingModule} from './page-not-found-routing.module';

@NgModule({
    declarations:[
        PageNotFoundComponent

    ],
    imports :[
        CommonModule,
        SharedModule,
        PageNotFountRoutingModule
    ]
})

export class PageNoFoundModule{}