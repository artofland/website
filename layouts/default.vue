<template>
  <v-app dark>
    <v-toolbar style="background-color:rgba(0,0,0,0);" elevation="0">
     <span class="hidden-sm-and-up">
    </span>
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer">
        <img src="/img/logo-color.png" height="50px" />
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn
      to="/marketplace"
        text color="accent">
          Buy lands
      </v-btn>
      <v-btn
      to="/map"
        text >
          Map
      </v-btn>
      <v-btn
      to="/download"
        text >
          Downloads
      </v-btn>
      <!-- <v-btn
        text >
          Sign/Login
      </v-btn> -->
    </v-toolbar-items>
    </v-toolbar>
    <v-main>
      <v-container fluid class="px-0">
        <v-carousel :show-arrows="false">
          <v-carousel-item src="/img/screenshot.png">
            <v-container>
            <v-row>
              <v-col cols="12" class="text-center">
                <img src="/img/logo-color.png" height=100/>
              </v-col>
              <v-col cols="12" md="6" class="pb-16 mt-12">
                <v-card class="rounded-lg pa-6">
                  <v-card-text>
                    <span class="text-h4">Claim your <span class="primary--text">LAND</span> for Free now</span>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="accent" class="font-weight-bold">Claim</v-btn>
                    <v-spacer />
                    <v-btn color="secondary" class="font-weight-bold">Play</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col> 
            </v-row>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-container>
        <Nuxt />
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
    <v-container class="py-12">
      <v-row>
        <v-col cols=3>
          <img width="200px" src="/img/logo-white.png"/>
        </v-col>
        <v-col>
          <a to="/">Home</a> <br>
           <a style="text-decoration: none;" href="https://github.com/artofland" target="_blank"><v-icon>mdi-github</v-icon>Github</a>  <br>
        </v-col>
        <v-col class="text-right">
          <span class="text-h5">
            Follow us
          </span>
          <br/>
          <v-btn href="https://discord.gg/8gtqn2v9Zu" target="_blank" icon>
            <v-icon>mdi-discord</v-icon>
          </v-btn>
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
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

$body-font-family: 'Open Sans';
$title-font: 'Alfa Slab One';

.v-application {
   font-family: $body-font-family, sans-serif !important;
    .title, .text-h1, .text-h2,.text-h3,.text-h4,.text-h5, h1, h2, h3, h4, h5 { // To pin point specific classes of some components
       font-family: $title-font, sans-serif !important;
       font-weight: normal;
    }
 }

.theme--dark.v-application{
  background: rgb(2,0,36);
  background: linear-gradient(150deg, rgba(2,0,36,1) 0%, rgba(3,28,8,1) 100%);
}
 
</style>
