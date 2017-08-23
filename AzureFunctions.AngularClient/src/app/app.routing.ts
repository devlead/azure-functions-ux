// import { MainComponent } from './main/main.component';
import { InitialLoadingComponent } from './initial-loading.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: InitialLoadingComponent },
    { path: 'main', loadChildren: 'app/main/main.module#MainModule'}

    //   { path: 'main', component: MainComponent }
    
//   { path: '', redirectTo: 'main', pathMatch: 'full' },
//   { path: 'main', component: MainComponent },
//   { path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
