<template>
    <v-container>
        <v-row class="mb-12">
            <v-col cols="12" class="my-6">
                <span class="text-h3">This is the <span class="primary--text">LAND</span></span><br />
                <span class="text-h3">Marketplace</span><br/>
                <v-divider></v-divider>
                <br/>
                <v-card>
                <v-card-text>

                    <span class="text-h5">About Cyrpto payments</span>
                    <p>If is the first time you use crypto currency for payments, we recommand to you to learn how to use <a style="text-decoration:none;" target="_blank" href="https://metamask.io/">Metamask</a>, it's a secure crypto wallet for make payment on Web3 platforms like ours</p>
                </v-card-text>    
                </v-card>
            </v-col>
            <v-col cols="4" style="" class="pa-2" v-for="chunk in chunks" :key="chunk.id">
                <v-card :disabled="chunk.attributes.owner">
                    <v-img src="/img/chunk.png" />
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <span class="text-h5">
                                    64x64 Block #{{ chunk.id }}
                                </span>
                                <ul class="m-3">
                                    <li>Position: <a>[{{chunk.attributes.x}},{{chunk.attributes.z}}]</a></li>
                                </ul>
                                <br />
                            </v-col>
                        </v-row>

                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="accent" @click="PayWithMetaMask()">Buy for 0.1 ETH<v-icon>mdi-ethereum</v-icon></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios';
export default {
    name: 'MarketplacePage',
    data:()=>({
        chunks:[]
    }),
    methods: {
        getChunks() {
            axios.get('https://backend.artof.land/api/chunks').then(res => {
                this.chunks = res.data.data;
            })
        },
        async PayWithMetaMask() {
            if (typeof web3 === 'undefined') return;
            web3 = new Web3(window.ethereum)
            window.ethereum.enable().catch(error => {
                console.log(error)
            })

            console.log(web3);

            var user_address = await web3.eth.getAccounts()

            web3.eth.sendTransaction(
                {
                    to: '0x383eB30c8e825B888C3fB06439A2D96e0cC4BD33',
                    from: user_address[0],
                    value: web3.utils.toWei("0.1", "ether"),
                    // data:"0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000b48656c6c6f20576f726c64000000000000000000000000000000000000000000"
                },
                function (err, transactionHash) {
                    console.log(transactionHash);
                })
        }
    },
    mounted()
    {
        this.getChunks();
    }
}
</script>