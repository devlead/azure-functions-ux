import { TblThComponent } from './../controls/tbl/tbl-th/tbl-th.component';
import { TblComponent } from './../controls/tbl/tbl.component';
import { DropDownComponent } from './../drop-down/drop-down.component';
import { GlobalErrorHandler } from './GlobalErrorHandler';
import { AiTryService } from './services/ai-try.service';
import { ArmTryService } from './services/arm-try.service';
import { GlobalStateService } from './services/global-state.service';
import { BackgroundTasksService } from './services/background-tasks.service';
import { UtilitiesService } from './services/utilities.service';
import { TelemetryService } from './services/telemetry.service';
import { LocalStorageService } from './services/local-storage.service';
import { AuthzService } from './services/authz.service';
import { SlotsService } from './services/slots.service';
import { ScenarioService } from './services/scenario/scenario.service';
import { CacheService } from './services/cache.service';
import { AiService } from './services/ai.service';
import { Http } from '@angular/http';
import { ArmService } from './services/arm.service';
import { LogService } from './services/log.service';
import { FunctionMonitorService } from './services/function-monitor.service';
import { BroadcastService } from 'app/shared/services/broadcast.service';
import { PortalService } from './services/portal.service';
import { LanguageService } from './services/language.service';
import { FunctionsService } from './services/functions.service';
import { ConfigService } from './services/config.service';
import { UserService } from './services/user.service';
import { MultiDropDownComponent } from './../multi-drop-down/multi-drop-down.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { TryNowComponent } from './../try-now/try-now.component';
// import { TryNowBusyStateComponent } from './../try-now-busy-state/try-now-busy-state.component';
import { BusyStateComponent } from './../busy-state/busy-state.component';
import { TopBarComponent } from './../top-bar/top-bar.component';
import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

export function ArmServiceFactory(
    http: Http,
    userService: UserService,
    aiService: AiService) {
    const service = window.location.pathname.toLowerCase() === '/try' ?
        new ArmTryService(http, userService, aiService) :
        new ArmService(http, userService, aiService);

    return service;
}

export function AiServiceFactory() {
    const service = window.location.pathname.toLowerCase() === '/try' ? new AiTryService() : new AiService();
    return service;
}


@NgModule({
    declarations: [
        TopBarComponent,
        BusyStateComponent,
        MultiDropDownComponent,
        DropDownComponent,
        TblComponent,
        TblThComponent
        // TryNowBusyStateComponent,
        // TryNowComponent,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MultiDropDownComponent,
        TopBarComponent,
        BusyStateComponent,
        DropDownComponent,
        TblComponent,
        TblThComponent
        // TryNowBusyStateComponent,
        // TryNowComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        TranslateModule.forChild()
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ConfigService,
                FunctionsService,
                UserService,
                LanguageService,
                PortalService,
                BroadcastService,
                FunctionMonitorService,
                LogService,
                {
                    provide: ArmService, useFactory: ArmServiceFactory, deps: [
                        Http,
                        UserService,
                        AiService
                    ]
                },
                CacheService,
                ScenarioService,
                SlotsService,
                AuthzService,
                LocalStorageService,
                TelemetryService,
                UtilitiesService,
                BackgroundTasksService,
                GlobalStateService,
                { provide: AiService, useFactory: AiServiceFactory },
                { provide: ErrorHandler, useClass: GlobalErrorHandler }
            ]
        };
    }
}
