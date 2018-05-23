import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { ChartComponent } from './charts/chart/chart.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@NgModule({
    imports: [
        CommonModule,
        CustomMaterialModule
    ],
    declarations: [MapComponent, ChartComponent],
    exports: [MapComponent, ChartComponent, CustomMaterialModule]
})
export class UiKitModule { }
