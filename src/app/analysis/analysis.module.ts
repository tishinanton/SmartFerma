import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { UiKitModule } from '../ui-kit/ui-kit.module';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { GmapsModule } from '../gmaps/gmaps.module';

@NgModule({
    imports: [
        CommonModule,
        UiKitModule,
        GmapsModule,
        AnalysisRoutingModule
    ],
    declarations: [MainPageComponent, MapPageComponent]
})
export class AnalysisModule { }
