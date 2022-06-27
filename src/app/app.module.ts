import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';
import {ProductPageComponent} from './product-page/product-page.component';
import {ButtonComponent} from './shared/ui/button/button.component';
import {ExpPanelComponent} from './shared/ui/exp-panel/exp-panel.component';
import { TodoItemComponent } from './shared/ui/todo-item/todo-item.component';
import { PopupComponent } from './shared/ui/popup/popup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DetailsFormComponent } from './shared/ui/details-form/details-form.component';
import { SelectComponent } from './shared/ui/select/select.component';
import { InputComponent } from './shared/ui/input/input.component';
import { TextareaComponent } from './shared/ui/textarea/textarea.component';
import { FileButtonComponent } from './shared/ui/file-button/file-button.component';
import { CheckboxComponent } from './shared/ui/checkbox/checkbox.component';

@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        ProductPageComponent,
        ButtonComponent,
        ExpPanelComponent,
        TodoItemComponent,
        PopupComponent,
        DetailsFormComponent,
        SelectComponent,
        InputComponent,
        TextareaComponent,
        FileButtonComponent,
        CheckboxComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
