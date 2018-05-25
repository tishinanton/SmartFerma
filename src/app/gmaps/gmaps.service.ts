import { GOOGLE_MAPS_API_KEY } from './gmaps.tokens';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class GmapsService {

    private mapInitialized$: Promise<any>;

    constructor(@Inject(GOOGLE_MAPS_API_KEY) private apiKey: string) { }

    public async mapInitialized() {
        if (!this.mapInitialized$) {
            this.mapInitialized$ = new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&callback=initGmap`;
                (window as any).initGmap = () => {
                    resolve();
                };
                document.body.appendChild(script);
            });
        }
        return this.mapInitialized$;
    }
}
