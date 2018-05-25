import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './charts/chart/chart.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { ChartWrapperComponent } from './charts/chart-wrapper/chart-wrapper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangesCardComponent } from './changes-card/changes-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CustomMaterialModule
    ],
    declarations: [ChartComponent, ChartWrapperComponent, ChangesCardComponent],
    exports: [ChartComponent, CustomMaterialModule, ChartWrapperComponent, ChangesCardComponent]
})
export class UiKitModule { }
