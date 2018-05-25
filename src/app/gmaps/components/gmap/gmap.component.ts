import { } from '@types/googlemaps';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GmapsService } from '../../gmaps.service';
// import * as google from 'googlemaps';

@Component({
    selector: 'app-gmap',
    templateUrl: './gmap.component.html',
    styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {

    @ViewChild('map') private mapElementRef: ElementRef;
    private map: google.maps.Map;

    get mapElement() {
        return this.mapElementRef && this.mapElementRef.nativeElement as HTMLDivElement;
    }

    constructor(
        private gmaps: GmapsService
    ) { }

    async ngOnInit() {
        await this.gmaps.mapInitialized();
        // const map = new google.maps.Map(this.mapElement, {
        //     zoom: 11,
        //     center: { lat: 43.337401, lng: 76.715382 }
        // });

        // const ctaLayer = new google.maps.KmlLayer({
        //     url: '/assets/gmaps.kml',
        //     map: this.map
        // });

        const map = new google.maps.Map(this.mapElement, {
            zoom: 11,
            center: { lat: 41.876, lng: -87.624 }
        });

        const ctaLayer = new google.maps.KmlLayer({
            // url: 'http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml',
            url: 'http://localhost:5000/assets/cta.kml',
            map: map
        });
        this.map = map;
    }

}
