import { MonacoEditorDirective } from './directives/monaco-editor.directive';
import { PairListComponent } from './../controls/pair-list/pair-list.component';
import { FunctionKeysComponent } from './../function-keys/function-keys.component';
import { PopoverModule } from 'ng2-popover';
import { BindingEventGridComponent } from './../binding-event-grid/binding-event-grid.component';
import { AppSettingComponent } from './../pickers/app-setting/app-setting.component';
import { ServiceBusComponent } from './../pickers/service-bus/service-bus.component';
import { EventHubComponent } from './../pickers/event-hub/event-hub.component';
import { SecretsBoxInputDirective } from './../secrets-box-container/secrets-box-input.directive';
import { SecretsBoxContainerComponent } from './../secrets-box-container/secrets-box-container.component';
import { TooltipDirective } from './../tooltip-content/tooltip.directive';
import { TooltipContentComponent } from './../tooltip-content/tooltip-content.component';
import { SharedModule } from './shared.module';
import { BindingInputComponent } from './../binding-input/binding-input.component';
import { BindingComponent } from './../binding/binding.component';
import { TemplatePickerComponent } from './../template-picker/template-picker.component';
import { EditModeWarningComponent } from './../edit-mode-warning/edit-mode-warning.component';
import { SearchBoxComponent } from './../search-box/search-box.component';
import { FnWriteAccessDirective } from './directives/fn-write-access.directive';
import { CopyPreComponent } from './../copy-pre/copy-pre.component';
import { ClickToEditComponent } from './../controls/click-to-edit/click-to-edit.component';
import { TextboxComponent } from './../controls/textbox/textbox.component';
import { PopOverComponent } from './../pop-over/pop-over.component';
import { RadioSelectorComponent } from './../radio-selector/radio-selector.component';
import { DynamicLoaderDirective } from './directives/dynamic-loader.directive';
import { CheckScenarioDirective } from './directives/check-scenario.directive';
import { CommandComponent } from './../controls/command-bar/command/command.component';
import { CommandBarComponent } from './../controls/command-bar/command-bar.component';
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


@NgModule({
    declarations: [
        FunctionKeysComponent,
        PairListComponent,
        EditModeWarningComponent,
        FnWriteAccessDirective,
        MonacoEditorDirective,
    ],
    exports: [
        FunctionKeysComponent,
        PairListComponent,
        EditModeWarningComponent,
        FnWriteAccessDirective,
        MonacoEditorDirective
    ],
    imports: [
        TranslateModule.forChild(),
        SharedModule
    ]
})
export class SharedFunctionsModule {
    // static forRoot(): ModuleWithProviders {
    //     return {
    //         ngModule: FunctionsSharedModule,
    //         providers: []
    //     };
    // }
}
