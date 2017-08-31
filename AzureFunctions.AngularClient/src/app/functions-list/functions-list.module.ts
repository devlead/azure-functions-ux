import { SharedFunctionsModule } from './../shared/shared-functions.module';
import { FunctionsListComponent } from './functions-list.component';
import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: FunctionsListComponent }
]);

@NgModule({
    imports: [
        TranslateModule.forChild(),
        SharedModule,
        SharedFunctionsModule,
        routing
    ],
    declarations: [
        FunctionsListComponent,
    ],
    providers: []
})
export class FunctionsListModule { }
