<template>
  <v-app dark>
    <v-app-bar class="text-center black">
      <v-container>
      <v-row>
        <v-col class="pt-6 text-left d-none d-md-block">
          <v-btn
          to="/"

            text color="white">
              Home
          </v-btn>
        </v-col>
        <v-col >
          <router-link to="/" tag="span" style="cursor: pointer">
            <img src="/img/logo-color.png" height="50px" />
          </router-link>
        </v-col >
        <v-col class="pt-5 text-right d-none d-md-block">
          <v-btn
          to="/register"
            text>
              Register
          </v-btn>
          <v-btn
            target="_blank"
            href="https://opensea.io/collection/waterworld-artofland"
            large color="accent">
              Buy lands
          </v-btn>
        </v-col>
      </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container fluid class="px-0">
        <v-carousel :show-arrows="false">
        <video class="d-none d-md-block" style="width:100%;position:absolute; top:-300px" id="video1" preload="" autoplay="" muted="" playsinline="" loop="">
            <source src="/waterworld-metaverse-launch-artofland.webm" type="video/webm">
        </video> 
          <!-- <v-carousel-item > -->
          <v-carousel-item :src="$vuetify.breakpoint.mobile ? `/img/background-header.png` :''">
            <v-container>
              <v-row class="py-16">
              <v-col cols="12" md="8" class="py-16">
                <span class="text-h5 text-md-h3 primary--text">NEW WORLD</span><br/>
                <span class="text-h5 text-md-h3">WATERWORLD</span><br/>
                <span style="font-size:30px;">Discover our new <b>Metaverse</b> world<br/>
                Claim your <b>LAND</b> now for free</span><br/>
                <v-btn color="accent" href="#claimland" large elevation="0" class="mt-6">Claim your Land</v-btn>
              </v-col> 
            </v-row>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-container>
        <Nuxt />
    </v-main>
    <v-footer>
    <v-container class="py-12">
      <v-row class="py-12">
        <v-col cols=12 md="4" class="text-center text-md-left">
          <img width="200px" src="/img/logo-white.png"/>
        </v-col>
        <v-col cols="12" md="4"  class="text-center text-md-left">
          <router-link tag="a" style="text-decoration: none;" class="white--text" to="/">Home</router-link> <br>
           <a class="white--text" style="text-decoration: none;" href="https://github.com/artofland" target="_blank">Github</a>  <br>
           <a class="white--text" style="text-decoration: none;" href="https://opensea.io/collection/waterworld-artofland" target="_blank">OpenSea</a>  <br>
           <router-link tag="a" class="white--text" style="text-decoration: none;" to="/terms">Terms of use</router-link>  <br>
        </v-col>
        <v-col  class="text-center text-md-right" cols="12" md="4">
          <span class="text-h5">
            Follow us
          </span>
          <br/>
             <a class="white--text" style="text-decoration: none;" href="https://discord.gg/8gtqn2v9Zu" target="_blank">Discord</a> <br/>
             <small class="mt-3">Copyright 2022 © All right reserved</small>
          <!-- <v-btn icon>
            <v-icon>mdi-twitter</v-icon>
            </v-btn> -->
        </v-col>
      </v-row>
    </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss">

$body-font-family: 'Montserrat';
$title-font: 'Alfa Slab One';

.v-application {
   font-family: $body-font-family, sans-serif !important;
   .text-h1, .text-h2,.text-h3,.text-h4,.text-h5, h1, h2, h3, h4, h5 { // To pin point specific classes of some components
       font-family: $title-font, sans-serif !important;
       font-weight: normal;
    }
    .title {
      font-weight: bold;
      font-size:2em!important;
    }
 }

.theme--dark.v-application{
  background: rgb(2,0,36);
  background: linear-gradient(150deg, rgba(2,0,36,1) 0%, rgba(3,28,8,1) 100%);
}
 
</style>
