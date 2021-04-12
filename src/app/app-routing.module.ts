import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import {LayoutComponent} from './layout/layout.component';
import {AdminGuard} from './admin.guard';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        //component: HomeComponent
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        //component: ProductsComponent
        loadChildren : () => import ('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'demo',
        //component: DemoComponent
        loadChildren: () => import ('./demo/demo.module').then(m => m.DemoModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        //component:ContactComponent
        loadChildren: () => import ('./contact/contact.module').then(m => m.ContactModule)
      },
    ]
  },
  {
    path: '**',
    //component: PageNotFoundComponent
    loadChildren: () => import ('./page-not-found/page-not-found.module').then(m => m.PageNoFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
