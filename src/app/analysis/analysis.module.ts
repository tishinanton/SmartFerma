import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { UiKitModule } from '../ui-kit/ui-kit.module';

@NgModule({
    imports: [
        CommonModule,
        UiKitModule,
        AnalysisRoutingModule
    ],
    declarations: [MainPageComponent]
})
export class AnalysisModule { }
