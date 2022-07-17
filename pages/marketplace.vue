<template>
    <v-container>
        <v-row class="mb-12">
            <v-col cols="12" class="my-6">
                <span class="text-h3">This is the <span class="primary--text">LAND</span></span><br />
                <span class="text-h3">Marketplace</span>
            </v-col>
            <v-col cols="4" style="" class="pa-2" v-for="i in 6" :key="i">
                <v-card>
                    <v-img src="/img/chunk.png" />
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <span class="text-h5">
                                    64x64 Block #{{ i }}
                                </span>
                                <ul class="m-3">
                                    <li>Position: <a>[0,0]</a></li>
                                    <li>Seller: <a>@Simerca</a></li>
                                </ul>
                                <br />
                            </v-col>
                        </v-row>

                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="accent" disabled>Buy for 1$ (SOON)</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'MarketplacePage'
}
</script>