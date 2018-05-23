import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { UiKitModule } from './ui-kit/ui-kit.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UiKitModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
