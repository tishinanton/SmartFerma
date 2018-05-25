import { } from '@types/googlemaps';
import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { GmapsService } from '../../gmaps.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { GOOGLE_MAPS_API_KEY } from '../../gmaps.tokens';
// import * as google from 'googlemaps';

export class MapLayer {
    visible: boolean;
    layer: google.maps.MVCObject;
    title: string;

    constructor(...layers: Partial<MapLayer>[]) {
        Object.assign(this, ...layers);
    }
}

export class MapType {
    title: string;
    mapId: google.maps.MapTypeId;

    constructor(...types: Partial<MapType>[]) {
        Object.assign(this, ...types);
    }
}

@Component({
    selector: 'app-gmap',
    templateUrl: './gmap.component.html',
    styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {

    @ViewChild('layersTemplate') layersTemplate: TemplateRef<any>;
    @ViewChild('map') private mapElementRef: ElementRef;
    private map: google.maps.Map;
    public layers: MapLayer[] = [];
    mapId: google.maps.MapTypeId;
    mapIds: MapType[] = [];


    get mapElement() {
        return this.mapElementRef && this.mapElementRef.nativeElement as HTMLDivElement;
    }

    constructor(
        private gmaps: GmapsService,
        private matBottomSheet: MatBottomSheet
    ) { }

    async ngOnInit() {
        await this.gmaps.mapInitialized();
        const map = new google.maps.Map(this.mapElement, {
            zoom: 11,
            center: { lat: 43.337401, lng: 76.715382 },
            streetViewControl: false,
            fullscreenControlOptions: {
                position: google.maps.ControlPosition.BOTTOM_RIGHT
            },
            mapTypeId: google.maps.MapTypeId.HYBRID,
            mapTypeControl: false
        });
        const layer = new google.maps.KmlLayer({
            url: 'https://raw.githubusercontent.com/tishinanton/SmartFerma/master/src/assets/gmaps.kml',
            map: map
        });
        this.map = map;
        this.layers.push(new MapLayer({
            visible: true,
            layer,
            title: 'Поля'
        }));
        this.mapIds = [
            new MapType({ mapId: google.maps.MapTypeId.ROADMAP, title: 'Дорожная карта' }),
            new MapType({ mapId: google.maps.MapTypeId.HYBRID, title: 'Гибридная' }),
            new MapType({ mapId: google.maps.MapTypeId.SATELLITE, title: 'Спутник' }),
            new MapType({ mapId: google.maps.MapTypeId.TERRAIN, title: 'Рельеф' }),
        ];
        this.mapId = google.maps.MapTypeId.HYBRID;
    }

    openLayers() {
        this.matBottomSheet.open(this.layersTemplate);
    }

    mapTypeSelected(type: MapType) {
        this.mapId = type.mapId;
        this.map.setMapTypeId(type.mapId);
    }

    toggleLayer(layer: MapLayer) {
        layer.visible = !layer.visible;
        if (!layer.visible) {
            (layer.layer as google.maps.KmlLayer).setMap(null);
        } else {
            (layer.layer as google.maps.KmlLayer).setMap(this.map);
        }
    }

}
