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

@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        ProductPageComponent,
        ButtonComponent,
        ExpPanelComponent,
        TodoItemComponent,
        PopupComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
