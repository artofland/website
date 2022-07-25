<template>
  <v-container fluid class="px-0">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <h1 class="primary--text">Artof.Land</h1>
          <h2>Get a Land in our Metaverse easier</h2>
        </v-col>
        <v-col cols="12" class="text-center my-6">
          <span class="text-h4">GET <span class="primary--text">LANDS</span></span> <br />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3" class="text-right displayBox" data-aos="zoom-in" data-aos-easing="ease-in"
          v-for="i in assets" :key="i.id">
          <v-card :href="i.permalink" class="rounded">
            <v-img v-if="i.image_url" :src="i.image_url" />
          </v-card>
          <v-col class="text-left">
            <small class="font-weight-bold accent--text">LANDS</small> <br />
            <span class="font-weight-bold">{{ i.name }}</span> <br />
            <a style="text-decoration: none;" :href="i.permalink">Get it on OpenSea<v-icon small>mdi-arrow-right
              </v-icon></a>
          </v-col>
        </v-col>
      </v-row>
    </v-container>

    <v-sheet class="mt-16 py-16 backoverlay"
      style="position:relative; background-image:url('/img/capture-1.png'); background-size:cover; background-position:center;"
      id="claimland">
      <v-col cols="10" md="6" class="mx-auto py-16">
        <v-row class="rounded-lg px-0 px-md-12" data-aos="zoom-in" data-aos-easing="ease-in">
          <v-col cols="12" md="6">
            <span class="title">
              Get your FREE <span class="primary--text">LAND</span>
            </span>
            <br />
            <br />
            <span>
              For limited time you can claim a Free LAND to start build on Artof.LAND Metaverse
            </span>

            <v-btn class="mt-6" color="accent" @click="getPublicKey()" block>
              <img contain height="30" width="30"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png" />Connect
              Metamask
            </v-btn>
            <a style="text-decoration: none;" target="_blank" href="https://metamask.io/">Install Metamask</a>

          </v-col>
          <v-col cols="12" md="6">
            <v-img contain height="200" src="/img/nft-base.png" />
          </v-col>
        </v-row>
      </v-col>
    </v-sheet>

    <v-container class="py-12">
      <v-row>

        <v-col cols="12" class="text-center my-12">
          <span class="text-h4 ">GET THE LAST <span class="primary--text">NEWS</span></span>
          <v-divider />
        </v-col>
        <v-col cols="12" md="4" v-for="blog in blogs" :key="blog.id">
          <v-card class="mb-3" @click="openNews(blog)">
            <v-img :src="blog.fields.Image[0].thumbnails.large.url"></v-img>
          </v-card>
          <small class="accent--text font-weight-bold">NEWS</small>
          <h4 style="cursor:pointer;" @click="openNews(blog)">{{ blog.fields["Title"] }}</h4>
          <div v-html="`${$md.render(blog.fields.Content.slice(0, 120))}...`"></div>
          <v-divider />
          <v-col class="text-right">
            <small class="grey--text">{{ moment(blog.createdTime).format('DD MMM YYYY') }}</small>
          </v-col>
        </v-col>
      </v-row>
    </v-container>

    <v-sheet class="mt-16 py-16 backoverlay"
      style="position:relative; background-image:url('/img/opensea.png'); background-size:cover; background-position:center;"
      id="claimland">
      <v-col cols="10" md="6" class="mx-auto py-16">
        <v-row class="rounded-lg px-0 px-md-12" data-aos="zoom-in" data-aos-easing="ease-in">
          <v-col cols="12" class="py-16">
            <span class="title">
             Check our NFT <span class="primary--text">COLLECTIONS</span>
            </span>
            <br />
            <br />
            <span>
              Get all available <span class="primary--text font-weight-bold">LANDS</span> on <span class="font-weight-bold accent--text">OpenSea</span>.<br/>
              Buy and sell you NFT
            </span><br/>

            <v-btn class="mt-6 font-weight-bold" color="accent" href="https://opensea.io/collection/waterworld-artofland">
            Check our collection
            </v-btn>

          </v-col>
        </v-row>
      </v-col>
    </v-sheet>

    <v-container class="mt-12 py-12"
      style="background-image: url('/img/community-background.png');background-position: center;background-size: contain;">
      <v-row>
        <v-col cols=8 class="text-center mx-auto" data-aos="zoom-in" data-aos-easing="ease-in">
          <span class="text-h4 ">JOIN OUR <span class="primary--text">COMMUNITY</span></span>
        </v-col>
        <v-col cols="8" class="py-16 my-16 mx-auto">
          <v-btn block class="my-16 font-weight-bold" target="_blank" href="https://discord.gg/8gtqn2v9Zu">
            <v-icon class="mr-3">mdi-discord</v-icon>Join our discord
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-sheet class="mt-12 py-16 backoverlay"
      style="position:relative; background-image:url('/img/capture-2.png'); background-size:cover; background-position:center;">
      <v-container class="py-16 ">
        <v-row class="py-16">
          <v-col class="text-center" cols="12" data-aos="zoom-in" data-aos-easing="ease-in">
            <span class="text-h3">JOIN OUR <span class="primary--text">WORLD</span></span>
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

    <v-dialog :width="$vuetify.breakpoint.mobile ? '100%' : '40vw'" v-model="modal">
      <v-card v-if="selectedBlog">
        <v-img :src="selectedBlog.fields.Image[0].thumbnails.large.url" />
        <v-card-title>
          {{ selectedBlog.fields.Title }}
        </v-card-title>
        <v-card-text>
          <div v-html="`${$md.render(selectedBlog.fields.Content)}`"></div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <small class="grey--text">{{ moment(selectedBlog.createdTime).format('DD MMM YYYY') }}</small>

        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

import { cacheAdapterEnhancer } from 'axios-extensions';

export default {
  name: 'IndexPage',
  components: {
  },
  data: () => ({
    modal: false,
    selectedBlog: null,
    fetchids: [
      {
        contract: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        token: '40868789574586488834959443052281218598274334533160055729397296519511053172737',
      },
      {
        contract: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        token: '40868789574586488834959443052281218598274334533160055729397296605272960139265',
      },
      {
        contract: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        token: '40868789574586488834959443052281218598274334533160055729397296542600797356033',
      },
      {
        contract: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        token: '40868789574586488834959443052281218598274334533160055729397296517312029917185',
      },
    ],
    assets: [],
    offerTime: null,
    nowTime: null,
    error: false,
    success: false,
    moment: moment,
    blogs: []
  }),
  methods: {

    openNews(blog) {
      this.selectedBlog = blog;
      this.modal = true;
    },
    getBlogs() {
      axios.get(`https://api.airtable.com/v0/appJLLfBpsTncq2i3/Blog?maxRecords=3&view=Grid%20view`, { headers: { "Authorization": `Bearer keyBYIcTIfpDRNEUa` } }, { adapter: cacheAdapterEnhancer(axios.defaults.adapter) }).then(res => {
        console.log('blog', res.data);
        this.blogs = res.data.records;
      })
    },
    getAssets(token, contract) {
      axios.get(`https://api.opensea.io/api/v1/asset/${contract}/${token}/?include_orders=false`).then(res => {
        this.assets.push(res.data);
        console.log(this.assets);
      })
    },
    async getPublicKey() {
      try {
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
      } catch (err) {
        this.error = err;
      }
    }
  },
  mounted() {
    this.getBlogs()
    for (const item of this.fetchids) {
      this.getAssets(item.token, item.contract);
    }
  }
}
</script>

<style>
.backoverlay:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgb(0 17 126 / 50%);
}
</style>