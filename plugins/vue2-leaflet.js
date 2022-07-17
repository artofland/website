import Vue from 'vue';
import { LMap, LTileLayer, LMarker, LRectangle, LPopup } from 'vue2-leaflet';
import L from 'leaflet';

Vue.use(L)

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-rectangle', LRectangle);
Vue.component('l-marker', LMarker);
Vue.component('l-popup', LPopup);