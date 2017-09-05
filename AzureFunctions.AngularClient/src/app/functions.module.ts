import { RunHttpComponent } from './run-http/run-http.component';
import { TableFunctionMonitorPipe } from './table-function-monitor/table-function-monitor.pipe';
import { TableFunctionMonitorComponent } from './table-function-monitor/table-function-monitor.component';
import { AggregateBlockPipe } from './aggregate-block/aggregate-block.pipe';
import { AggregateBlockComponent } from './aggregate-block/aggregate-block.component';
import { FunctionMonitorComponent } from './function-monitor/function-monitor.component';
import { PopoverModule } from 'ng2-popover';
import { BindingEventGridComponent } from './binding-event-grid/binding-event-grid.component';
import { PairListComponent } from './controls/pair-list/pair-list.component';
import { AppSettingComponent } from './pickers/app-setting/app-setting.component';
import { ServiceBusComponent } from './pickers/service-bus/service-bus.component';
import { EventHubComponent } from './pickers/event-hub/event-hub.component';
import { SecretsBoxContainerComponent } from './secrets-box-container/secrets-box-container.component';
import { TooltipDirective } from './tooltip-content/tooltip.directive';
import { TooltipContentComponent } from './tooltip-content/tooltip-content.component';
import { BindingInputComponent } from './binding-input/binding-input.component';
import { BindingComponent } from './binding/binding.component';
import { TemplatePickerComponent } from './template-picker/template-picker.component';
import { EditModeWarningComponent } from './edit-mode-warning/edit-mode-warning.component';
import { FnWriteAccessDirective } from './shared/directives/fn-write-access.directive';
import { FunctionQuickstartComponent } from './function-quickstart/function-quickstart.component';
import { FunctionNewComponent } from './function-new/function-new.component';
import { CreateFunctionWrapperComponent } from './create-function-wrapper/create-function-wrapper.component';
import { FunctionKeysComponent } from './function-keys/function-keys.component';
import { FunctionManageComponent } from './function-manage/function-manage.component';
import { FunctionIntegrateV2Component } from './function-integrate-v2/function-integrate-v2.component';
import { FunctionIntegrateComponent } from './function-integrate/function-integrate.component';
import { FileUploadModule } from 'ng2-file-upload';
import { MonacoEditorDirective } from './shared/directives/monaco-editor.directive';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { LogStreamingComponent } from './log-streaming/log-streaming.component';
import { SharedFunctionsModule } from './shared/shared-functions.module';
import { SharedModule } from './shared/shared.module';
import { FunctionsListComponent } from './functions-list/functions-list.component';
import { FunctionDevComponent } from './function-dev/function-dev.component';
import { FunctionEditComponent } from './function-edit/function-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { SecretsBoxInputDirective } from "app/secrets-box-container/secrets-box-input.directive";

const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: FunctionsListComponent,
        pathMatch: 'full',
    },
    {
        path: 'new/function',
        component: CreateFunctionWrapperComponent
    },
    {
        path: ':functionName',
        component: FunctionEditComponent,
    },
    {
        path: ':functionName/integrate',
        component: FunctionEditComponent
    },
    {
        path: ':functionName/manage',
        component: FunctionEditComponent
    },
    {
        path: ':functionName/monitor',
        component: FunctionEditComponent
    }

]);

@NgModule({
    imports: [
        TranslateModule.forChild(),
        SharedModule,
        SharedFunctionsModule,
        routing,
        FileUploadModule,
        PopoverModule
    ],
    declarations: [
        FunctionsListComponent,
        FunctionEditComponent,
        FunctionDevComponent,
        LogStreamingComponent,
        FileExplorerComponent,
        MonacoEditorDirective,
        FunctionIntegrateComponent,
        FunctionIntegrateV2Component,
        FunctionManageComponent,
        // FunctionKeysComponent,
        CreateFunctionWrapperComponent,
        FunctionNewComponent,
        FunctionQuickstartComponent,
        FnWriteAccessDirective,
        EditModeWarningComponent,
        TemplatePickerComponent,
        BindingComponent,
        BindingInputComponent,
        TooltipContentComponent,
        TooltipDirective,
        SecretsBoxContainerComponent,
        SecretsBoxInputDirective,
        EventHubComponent,
        ServiceBusComponent,
        AppSettingComponent,
        // PairListComponent,
        // RequestResposeOverrideComponent,
        BindingEventGridComponent,
        FunctionMonitorComponent,
        AggregateBlockComponent,
        AggregateBlockPipe,
        TableFunctionMonitorComponent,
        TableFunctionMonitorPipe,
        RunHttpComponent
    ],
    providers: []
})
export class FunctionsModule { }
