<template>
  <v-container fluid class="px-0">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center my-6">
          <span class="title">LANDS</span> <br />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" class="text-right" v-for="i in assets" :key="i.id">
          <v-card class="rounded">
            <v-img v-if="i.image_url" :src="i.image_url" />
          </v-card>
          <a style="text-decoration: none;" :href="i.permalink">Get on OpenSea <v-icon>mdi-arrow-right</v-icon></a>
        </v-col>
      </v-row>
    </v-container>

    <v-sheet class="mt-16 py-16" style="position:relative; background-image:url('/img/background-header.png');" id="claimland">
      <v-col cols="10" md="8" class="mx-auto py-16">
        <v-card class="rounded-lg px-0 px-md-12">
          <v-card-text class="pa-12 px-6 px-md-16 text-center">
            <span class="title">
              For limited time we offer to you a <span class="primary--text">LAND</span>
            </span>
            <v-divider class="mt-12"/>
            <v-btn color="accent" @click="getPublicKey()" block>
              <img contain height="30" width="30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"></v-img>Connect Metamask
            </v-btn>
            <v-col class="text-right">
              <a style="text-decoration: none;" target="_blank" href="https://metamask.io/">Install Metamask</a>
            </v-col>
          </v-card-text>
        </v-card>
      </v-col>
    </v-sheet>

    <v-container class="mt-12 py-12"
      style="background-image: url('/img/community-background.png');background-position: center;background-size: contain;">
      <v-row>
        <v-col cols=8 class="text-center mx-auto">
          <span class="text-h4 ">Join our <span class="primary--text">Community</span></span>
        </v-col>
        <v-col cols="8" class="py-16 my-16 mx-auto">
          <v-btn block class="my-16 font-weight-bold" target="_blank" href="https://discord.gg/8gtqn2v9Zu">
            <v-icon class="mr-3">mdi-discord</v-icon>Join our discord
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-sheet class="mt-12 py-16" style="background-image:url('/img/background-header.png')">
      <v-container class="py-16">
        <v-row>
          <v-col class="text-center" cols="12">
            <span class="text-h3">Join our <span class="primary--text">World</span></span>
          </v-col>
          <v-col cols="12" md="6" class="text-center mt-12">
            <v-btn disabled color="accent">
              <v-icon class="mr-3">mdi-apple</v-icon>Download for Mac (soon)
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" class="text-center mt-12">
            <v-btn disabled color="accent">
              <v-icon class="mr-3">mdi-microsoft</v-icon>Download for Windows (soon)
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-snackbar v-model="error" top color="error">
      An error produce, please try later
      </v-snackbar>
      <v-snackbar v-model="success" top color="success">
      You will receive your land in a few days!
      </v-snackbar>
    </v-sheet>

  </v-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
export default {
  name: 'IndexPage',
  methods: {
    moment,
  },
  data: () => ({
    fetchids: [
      {
        contract: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        token: '40868789574586488834959443052281218598274334533160055729397296463435960156161',
      },
      {
        contract: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        token: '40868789574586488834959443052281218598274334533160055729397296356783332261889',
      },
      {
        contract: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        token: '40868789574586488834959443052281218598274334533160055729397296235837053206529',
      },
    ],
    assets: [],
    offerTime: null,
    nowTime: null,
    error:false,
    success:false,
  }),
  methods: {
    getAssets(token, contract) {
      axios.get(`https://api.opensea.io/api/v1/asset/${contract}/${token}/?include_orders=false`).then(res => {
        this.assets.push(res.data);
        console.log(this.assets);
      })
    },
    async getPublicKey() {
      try{
        web3 = new Web3(window.ethereum)
        window.ethereum.enable().catch(error => {
          console.log(error)
        })
        console.log(web3);
  
        var user_address = await web3.eth.getAccounts()
        axios.post(`https://api.airtable.com/v0/appJLLfBpsTncq2i3/Drop`, {
          "records": [
            {
              "fields": {
                "Wallet ID": user_address[0]
              }
            }
          ]
        }, { headers: { "Authorization": `Bearer keyBYIcTIfpDRNEUa` } })
        this.success = true;
      }catch(err)
      {
        this.error = err;
      }
    }
  },
  mounted() {
    for (const item of this.fetchids) {
      this.getAssets(item.token, item.contract);
    }
  }
}
</script>
