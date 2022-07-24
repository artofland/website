<template>
    <v-container>
        <v-col>
            <span class="text-h3">This is</span><br/>
            <span class="text-h3"><span class="primary--text">LAND</span> MAP</span><br/>
            <!-- :options="{crs: L.CRS.Simple}" -->
            <l-map :center="[0,0]" :zoom="10" v-if="this.Leaflet" :options="{crs: this.Leaflet.CRS.Simple}" style="height:500px;">
            <l-tile-layer url="https://map-wtw.artof.land/api/tile/0/{x}/{y}/{z}?_=1658687347807"/>
                <l-rectangle v-for="(chunk, i) in bounds" :bounds="chunk.bounds" :l-style="{ opacity:.4, fillOpacity:.2,fillColor: !chunk.owner ? '#C6FF08':'red',color: !chunk.owner ? '#C6FF08':'red', weight: 3 }">
                    <l-popup v-if="chunk.owner">
                        <v-card width="300px">
                            <v-card-text>
                                <span class="text-h6">{{chunk.name}}</span> <br/>
                                <span class="text-h5">Owner </span> 
                                <span class="text-h5 primary--text">{{chunk.owner}}</span><br/>
                            </v-card-text>
                        </v-card>
                    </l-popup>
                    <l-popup v-else>
                        <v-card width="300px">
                            <v-card-text>
                                <span class="text-h6">{{chunk.name}}</span><br/>
                                <v-btn color="accent" block :href="`https://opensea.io/assets/waterworld-artofland?search[resultModel]=ASSETS&search[query]=WTW%20LAND&search[stringTraits][0][name]=ID&search[stringTraits][0][values][0]=WTW-${chunk.name}`">Buy this LAND</v-btn>
                            </v-card-text>
                        </v-card>
                    </l-popup>
                </l-rectangle>
            </l-map>

            <span class="primary--text">Available Land</span><br/>
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
        Leaflet:null,
        openseawtw:openseawtw
    }),
    methods: {
        getChunks() {
            console.log(areas);
            this.loadChunks(areas);
        },
        loadChunks(data) {
            for (const chunk of data) {
                if(chunk)
                {
                    this.bounds.push({
                        owner: chunk.owner == "Ayrton" ? null : chunk.owner,
                        name: chunk.name,
                        bounds: [[chunk.pos2.z / 500, chunk.pos2.x / 500], [chunk.pos1.z / 500, chunk.pos1.x/500]]
                    })
                }
            }
        }
    },
    mounted() {
        this.getChunks();
        this.Leaflet = L;
        console.log(this.L);
    }
}
</script>

<style>
.leaflet-container {
    background-color: rgba(0,0,0,0);
}
.leaflet-popup-content-wrapper, .leaflet-popup-tip {
    background-color: rgba(0,0,0,0);
    box-shadow: none;
}
</style>