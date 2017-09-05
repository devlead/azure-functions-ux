import { SlotsListComponent } from './../slots-list/slots-list.component';
import { SharedModule } from './../shared/shared.module';
import { AppsListComponent } from './apps-list.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: AppsListComponent }
]);

@NgModule({
    imports: [
        TranslateModule.forChild(),
        SharedModule,
        routing
    ],
    declarations: [
        AppsListComponent
    ],
    providers: []
})
export class AppsListModule { }
