import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { UiKitModule } from './ui-kit/ui-kit.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GmapsModule } from './gmaps/gmaps.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        UiKitModule,
        GmapsModule.forRoot('AIzaSyDqwzzgcukRVCNNc4Zf7XeLXcbplh7qjts')
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
