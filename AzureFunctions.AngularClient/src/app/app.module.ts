import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { InitialLoadingComponent } from './initial-loading.component';
import { appRouting } from './app.routing';
import { LogService } from './shared/services/log.service';
// import { CheckScenarioDirective } from './shared/directives/check-scenario.directive';
import { ScenarioService } from './shared/services/scenario/scenario.service';
// import { SiteTabComponent } from './site/site-dashboard/site-tab/site-tab.component';
// import { DynamicLoaderDirective } from './shared/directives/dynamic-loader.directive';
// import { DownloadFunctionAppContentComponent } from './download-function-app-content/download-function-app-content.component';
import { CreateAppComponent } from './site/create-app/create-app.component';
// import { ClickToEditComponent } from './controls/click-to-edit/click-to-edit.component';
import { AiTryService } from './shared/services/ai-try.service';
import { TblThComponent } from './controls/tbl/tbl-th/tbl-th.component';
import { TblComponent } from './controls/tbl/tbl.component';
import { GlobalErrorHandler } from './shared/GlobalErrorHandler';
import { ErrorHandler } from '@angular/core';
import { ArmTryService } from './shared/services/arm-try.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { TranslateModule } from '@ngx-translate/core';
// import { FileUploadModule } from 'ng2-file-upload';
import { PopoverModule } from 'ng2-popover';

import { ConfigService } from './shared/services/config.service';
import { FunctionsService } from './shared/services/functions.service';
import { UserService } from './shared/services/user.service';
import { PortalService } from './shared/services/portal.service';
import { BroadcastService } from './shared/services/broadcast.service';
import { FunctionMonitorService } from './shared/services/function-monitor.service';
import { ArmService } from './shared/services/arm.service';
import { CacheService } from './shared/services/cache.service';
import { AuthzService } from './shared/services/authz.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { TelemetryService } from './shared/services/telemetry.service';
import { UtilitiesService } from './shared/services/utilities.service';
import { BackgroundTasksService } from './shared/services/background-tasks.service';
import { GlobalStateService } from './shared/services/global-state.service';
import { AiService } from './shared/services/ai.service';
import { LanguageService } from './shared/services/language.service';

import { AppComponent } from './app.component';
// import { TryNowBusyStateComponent } from './try-now-busy-state/try-now-busy-state.component';
// import { TopBarComponent } from './top-bar/top-bar.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { TrialExpiredComponent } from './trial-expired/trial-expired.component';
import { ErrorListComponent } from './error-list/error-list.component';
import { TryLandingComponent } from './try-landing/try-landing.component';
import { TopRightMenuComponent } from './top-right-menu/top-right-menu.component';
import { DisabledDashboardComponent } from './disabled-dashboard/disabled-dashboard.component';
import { CreateFunctionWrapperComponent } from './create-function-wrapper/create-function-wrapper.component';
import { EventHubComponent } from './pickers/event-hub/event-hub.component';
import { ServiceBusComponent } from './pickers/service-bus/service-bus.component';
import { SlotsListComponent } from './slots-list/slots-list.component';
import { SlotsService } from './shared/services/slots.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AppSettingComponent } from './pickers/app-setting/app-setting.component';
import { PairListComponent } from './controls/pair-list/pair-list.component';
import { RequestResposeOverrideComponent } from './api/request-respose-override/request-respose-override.component';
import { BindingEventGridComponent } from './binding-event-grid/binding-event-grid.component';
import 'rxjs/add/operator/takeuntil';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/first';

const routes = RouterModule.forRoot([
  { path: '', pathMatch: 'full', component: InitialLoadingComponent },
  { path: 'main', loadChildren: 'app/main/main.module#MainModule'},
  { path: 'landing', loadChildren: 'app/getting-started/getting-started.module#GettingStartedModule'}
]);


@NgModule(AppModule.moduleDefinition)
export class AppModule {
  static moduleDefinition = {
    declarations: [
      AppComponent,
      InitialLoadingComponent,
      TrialExpiredComponent,
      ErrorListComponent,
      TryLandingComponent,
      TopRightMenuComponent,
      DisabledDashboardComponent,
      CreateAppComponent,
    ],
    imports: [
      SharedModule.forRoot(),
      ReactiveFormsModule,
      BrowserModule,
      HttpModule,
      TranslateModule.forRoot(),
      PopoverModule,
      routes
    ],
    bootstrap: [AppComponent]
  };
}
