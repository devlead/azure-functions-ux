import { MainLoadingComponent } from './main-loading.component';
import { Routes, RouterModule } from '@angular/router';
import { TreeViewComponent } from './../tree-view/tree-view.component';
import { CommonModule } from '@angular/common';
import { MultiDropDownComponent } from './../multi-drop-down/multi-drop-down.component';
import { SearchBoxComponent } from './../search-box/search-box.component';
import { TranslateModule } from '@ngx-translate/core';
import { SideNavComponent } from './../side-nav/side-nav.component';
import { SharedModule } from './../shared/shared.module';
import { MainComponent } from './main.component';
import { AppsListComponent } from './../apps-list/apps-list.component';
// import { mainRouting } from './main.routing';
import { NgModule, ModuleWithProviders } from '@angular/core';

const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: '', component: MainComponent,
        children: [
            { path: 'apps', loadChildren: 'app/apps-list/apps-list.module#AppsListModule'}
            // { path: '', redirectTo: 'apps', pathMatch: 'full' },
            // { path: 'apps', component: AppsListComponent }       // TODO: I think this should load a separate module
        ]
    },
    // { path: 'apps', loadChildren: 'app/apps-list/apps-list.module#AppsListModule'}
]);

@NgModule({
    imports: [
        TranslateModule.forChild(),
        SharedModule,
        routing
    ],
    declarations: [
        MainLoadingComponent,
        MainComponent,
        SideNavComponent,
        TreeViewComponent,
        SearchBoxComponent,
        // AppsListComponent
        // MultiDropDownComponent
        // SearchBoxComponent,
        // MultiDropDownComponent
    ],
    providers: []
})
export class MainModule { }
