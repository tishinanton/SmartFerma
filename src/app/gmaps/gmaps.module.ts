import { NgModule, ValueProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { GOOGLE_MAPS_API_KEY } from './gmaps.tokens';
import { GmapsService } from './gmaps.service';
import { GmapComponent } from './components/gmap/gmap.component';
import { UiKitModule } from '../ui-kit/ui-kit.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        UiKitModule,
        FormsModule,
        CommonModule
    ],
    declarations: [GmapComponent],
    exports: [GmapComponent]
})
export class GmapsModule {

    public static forRoot(
        googleApiKey: string
    ): ModuleWithProviders {
        return {
            ngModule: GmapsModuleForRoot,
            providers: [<ValueProvider>{
                provide: GOOGLE_MAPS_API_KEY,
                useValue: googleApiKey
            }]
        };
    }
}

@NgModule({
    imports: [
        CommonModule,

        GmapsModule
    ],
    exports: [
        GmapsModule
    ],
    declarations: [],
    providers: [GmapsService]
})
export class GmapsModuleForRoot {
    constructor(private gmaps: GmapsService) {
        this.init();
    }

    private async init() {
        await this.gmaps.mapInitialized();
        console.log('maps initialized');
    }
}
