<template>
<v-container fluid class="px-0">
  <v-container>
    <v-row>
      <v-col cols="8">
        <span class="text-h3  primary--text">Community</span> <br/>
        <span  class="text-h3 ">What's new ?</span>
      </v-col>
      <v-col class="py-12 text-right">
        Read more ...
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" v-for="i in 3" :key="i"> 
        <v-card class="rounded">
          <v-img src="/img/screenshot.png" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-sheet class="mt-16 py-16" style="position:relative; background-image:url('/img/screenshot.png');" height=600>
   <v-row class="mt-16">
    <v-col cols="10" md="8" class="mx-auto py-12">
      <v-card class="rounded-lg">
        <v-card-text class="pa-12">
          <span class="text-h3">
            For limited time we offer to you a <span class="primary--text">LAND</span>
          </span>
          <v-text-field rounded class="rounded-sm mt-8" dense filled placeholder="Enter your email" />
          <v-btn color="accent" block>Claim</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
   </v-row>
  </v-sheet>

<v-container class="mt-12">
  <v-row>
  <v-col cols=8 class="text-center mx-auto">
    <span class="text-h3 ">Join our <span class="primary--text">Community</span></span>
  </v-col>
  <v-col cols="8" class="py-16 mx-auto">
    <v-btn block><v-icon class="mr-3">mdi-discord</v-icon>Join our discord</v-btn>
  </v-col>
  </v-row>
</v-container>  

<v-sheet height="400" class="mt-12 py-16" style="background-image:url('/img/screenshot.png')">
  <v-row>
    <v-col class="text-center" cols="12">
      <span class="text-h3">Join our <span class="primary--text">World</span></span>
    </v-col>
    <v-col cols="6" class="text-center mt-12">
      <v-btn><v-icon class="mr-3">mdi-apple</v-icon>Download for Mac</v-btn>
    </v-col>
    <v-col cols="6" class="text-center mt-12">
      <v-btn><v-icon class="mr-3">mdi-microsoft</v-icon>Download for Windows</v-btn>
    </v-col>
  </v-row>
</v-sheet>

</v-container>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
