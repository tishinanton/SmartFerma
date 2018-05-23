import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

export const MATERIAL_MODULES = [
    MatToolbarModule,
    MatCardModule
];

@NgModule({
    imports: [
        CommonModule,
        ...MATERIAL_MODULES
    ],
    exports: [
        ...MATERIAL_MODULES
    ],
    declarations: []
})
export class CustomMaterialModule { }
