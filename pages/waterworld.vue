<template>
    <v-container>
        <v-col>
            <h1>WATERWORLD</h1><br />

            <h3 class="mt-6">ABOUT</h3>
            <v-divider class="mb-3" />

            <p class="text-heading font-weight-bold">
                Waterworld is a place dedicated to the artist, it allows everyone who has a LAND to be able to unveil
                their creativity and their digital works. It's a world partly covered with water and which is a clever
                mix between sky and sea. Mountain, beach, green zone, enjoy a multitude of different biomes and get
                inspired by this marine world.
            </p>

            <h3 class="mt-6">SETTINGS</h3>
            <v-divider class="mb-3" />

            <span class="text-h6">Number of <span class="primary--text">LANDS</span></span> : 123 (<a href="https://opensea.io/collection/waterworld-artofland" target="_blank" style="text-decoration: none;">view collection</a>)<br />
            <span class="text-h6">World size</span> : 11x11 (80x80 block size) <br />
            <span class="text-h6">Server max connection</span> : 64 Simultaneous <br />
            <span class="text-h6">URL</span> : waterword.artof.land <br />

            <h3 class="mt-6"><span class="primary--text">LAND</span> MAP</h3>
            <v-divider class="mb-3" />
            <!-- :options="{crs: L.CRS.Simple}" -->
            <l-map ref="map" :center="[0, 0]" :zoom="10" v-if="this.Leaflet"
                :options="{ crs: this.Leaflet.CRS.Simple, scale: scaleZoom }" style="height:100vh;">
                <l-tile-layer url="https://map-wtw.artof.land/api/tile/0/{x}/{y}/{z}?_=1658687347807" />
                <l-rectangle v-for="(chunk, i) in bounds" :bounds="chunk.bounds"
                    :l-style="{ opacity: .4, fillOpacity: .2, fillColor: !chunk.owner ? '#C6FF08' : 'red', color: !chunk.owner ? '#C6FF08' : 'red', weight: 3 }">
                    <l-popup v-if="chunk.owner">
                        <v-card width="300px">
                            <v-card-text>
                                <span class="text-h6">{{ chunk.name }}</span> <br />
                                <span class="text-h5">Owner </span>
                                <span class="text-h5 primary--text">{{ chunk.owner }}</span><br />
                            </v-card-text>
                        </v-card>
                    </l-popup>
                    <l-popup v-else>
                        <v-card width="300px">
                            <v-card-text>
                                <span class="text-h6">{{ chunk.name }}</span><br />
                                <v-btn color="accent" block
                                    :href="`https://opensea.io/assets/waterworld-artofland?search[resultModel]=ASSETS&search[stringTraits][0][name]=ID&search[stringTraits][0][values][0]=WTW-${chunk.name}`">
                                    Buy this LAND</v-btn>
                            </v-card-text>
                        </v-card>
                    </l-popup>
                </l-rectangle>
            </l-map>

            <span class="primary--text">Available Land</span><br />
            <span class="error--text">Not available Land</span>
        </v-col>
    </v-container>
</template>
<script>
import axios from 'axios';
import areas from '@/assets/areas.json'
import openseawtw from '@/assets/openseawtw.json'
export default {
    name: 'MapPage',
    data: () => ({
        bounds: [],
        Leaflet: null,
        openseawtw: openseawtw
    }),
    methods: {
        scaleZoom(zoom) {
            return Math.pow(2, zoom - 9);
        },
        getChunks() {
            console.log(areas);
            this.loadChunks(areas);
        },
        loadChunks(data) {
            let diviser = 512;
            for (const chunk of data) {
                if (chunk) {
                    this.bounds.push({
                        owner: chunk.owner == "Ayrton" ? null : chunk.owner,
                        name: chunk.name,
                        bounds: [[(chunk.pos2.z + 1) / diviser, (chunk.pos2.x + 1) / diviser], [chunk.pos1.z / diviser, chunk.pos1.x / diviser]]
                    })
                }
            }
        }
    },
    mounted() {
        this.getChunks();
        this.Leaflet = L;
        console.log(this.L);
        this.$nextTick(() => {
            console.log(this.$refs.map)
            this.$refs.map.mapObject.on('mousemove', (map) => {
                console.log(map);
                // console.log(map.layerPoint.x)
                // console.log(map.layerPoint.y)
            })
        })
    }
}
</script>

<style>
.leaflet-container {
    background-color: rgba(0, 0, 0, 0);
}

.leaflet-popup-content-wrapper,
.leaflet-popup-tip {
    background-color: rgba(0, 0, 0, 0);
    box-shadow: none;
}
</style>