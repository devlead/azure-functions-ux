import { SharedFunctionsModule } from './../shared/shared-functions.module';
import { BindingComponent } from './../binding/binding.component';
import { TemplatePickerComponent } from './../template-picker/template-picker.component';
// import { EditModeWarningComponent } from './../edit-mode-warning/edit-mode-warning.component';
import { FunctionQuickstartComponent } from './../function-quickstart/function-quickstart.component';
import { FunctionNewComponent } from './../function-new/function-new.component';
import { CreateFunctionWrapperComponent } from './create-function-wrapper.component';
import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: CreateFunctionWrapperComponent }
]);

@NgModule({
    imports: [
        TranslateModule.forChild(),
        SharedModule,
        SharedFunctionsModule,
        routing
    ],
    declarations: [
        CreateFunctionWrapperComponent,
        FunctionNewComponent,
        FunctionQuickstartComponent,
        // EditModeWarningComponent,
        // TemplatePickerComponent,
        // BindingComponent,
    ],
    providers: []
})
export class CreateFunctionModule { }
