<template>
    <v-container>
        <v-col>
            <span class="text-h3">This is</span><br/>
            <span class="text-h3"><span class="primary--text">LAND</span> MAP</span><br/>
            <!-- :options="{crs: L.CRS.Simple}" -->
            <l-map v-if="this.Leaflet" :options="{crs: this.Leaflet.CRS.Simple}" style="height:500px;">
                <l-rectangle v-for="chunk in bounds" :bounds="chunk.bounds" :l-style="{ fillOpacity:.7,fillColor: !chunk.owner ? '#C6FF08':'red',color: !chunk.owner ? '#C6FF08':'red', weight: 3 }">
                    <l-popup v-if="chunk.owner">
                        <v-card>
                            <v-card-text>
                                <span class="text-h4">Owner #</span> 
                                <span class="text-h4 primary--text">{{chunk.owner}}</span><br/>
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
export default {
    name: 'MapPage',
    data: () => ({
        bounds: [],
        Leaflet:null
    }),
    methods: {
        getChunks() {
            axios.get('https://backend.artof.land/api/chunks').then(res => {
                this.loadChunks(res.data.data);
            })
        },
        loadChunks(data) {
            for (const chunk of data) {
                this.bounds.push({
                    owner: chunk.attributes.owner,
                    bounds: [[chunk.attributes.x, chunk.attributes.z], [chunk.attributes.x + 64, chunk.attributes.z + 64]]
                })
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