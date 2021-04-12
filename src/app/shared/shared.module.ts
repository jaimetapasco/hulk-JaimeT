import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { FooterComponent } from './componets/footer/footer.component';
import { HeaderComponent} from './componets/header/header.component';
import {CartComponent} from './componets/cart/cart.component';

import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    FooterComponent,
    HeaderComponent,
    CartComponent
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    FooterComponent,
    HeaderComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule

  ]
})
export class SharedModule { }
