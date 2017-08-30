import { FunctionsListComponent } from './../functions-list/functions-list.component';
import { SharedModule } from './../shared/shared.module';
import { AppsListComponent } from './apps-list.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

const routing: ModuleWithProviders = RouterModule.forChild([
    // { path: '', component: AppsListComponent, pathMatch: 'full' },
    { path: '', component: AppsListComponent }
    // { path: 'apps', component: AppsListComponent },
    // { path: 'apps/subscriptions/:subId/resourcegroups/:rg', component: AppsListComponent}
    
    // { path: '/subscriptions/'}
    // { path: 'apps', loadChildren: 'app/apps-list/apps-list.module#AppsListModule'}
]);

@NgModule({
    imports: [
        TranslateModule.forChild(),
        SharedModule,
        routing
    ],
    declarations: [
        AppsListComponent,
        // FunctionsListComponent
    ],
    providers: []
})
export class AppsListModule { }
