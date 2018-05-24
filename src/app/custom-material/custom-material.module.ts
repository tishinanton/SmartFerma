import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule, MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

export const MATERIAL_MODULES = [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
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
