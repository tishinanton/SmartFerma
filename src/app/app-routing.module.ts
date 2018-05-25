import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'analysis',
        pathMatch: 'full'
    },
    {
        path: 'analysis',
        loadChildren: './analysis/analysis.module#AnalysisModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
