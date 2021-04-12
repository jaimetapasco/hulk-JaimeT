import { NgModule } from '@angular/core';
import {CommonModule, formatNumber} from '@angular/common';
import {BannerComponent} from './components/banner/banner.component';
import {HomeComponent} from './components/home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from './../shared/shared.module';
import {MaterialModule} from './../material/material.module';


@NgModule({
    declarations:[
        BannerComponent,
        HomeComponent
        
    ],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule,
        MaterialModule
    ]
})

export class HomeModule{

}