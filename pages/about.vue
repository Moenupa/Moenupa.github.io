<template>
  <v-container class="d-flex flex-column justify-center align-center ma-auto">
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="4" md="5" lg="6">
        <v-img src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-atom.svg" alt=""></v-img>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="text-xl-h1 text-lg-h2 text-md-h3 text-h4 font-weight-light" :style="`color:${$vuetify.theme.dark ? '#00C58E' : '#2F495E'}`">Moenupa.homepage</h1>
        <h3 class="text-xl-h4 text-lg-h5 text-h6 font-weight-light teal--text text--darken-1">Powered by Nuxt.js and Vuetify</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>  
        <v-btn
          href="https://nuxtjs.org/"
          target="_blank"
          :color="`success ${$vuetify.theme.dark ? '' : 'darken-1'}`"
        >
          <v-icon left>mdi-nuxt</v-icon>
          Nuxt.js
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          href="https://vuetifyjs.com/"
          target="_blank"
          color="primary"
        >
          <v-icon left>mdi-vuetify</v-icon>
          Vuetify
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>  
        <v-btn
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          outlined
          color="secondary lighten-2"
        >
          <v-icon left>mdi-nuxt</v-icon>
          GitHub
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          href="https://github.com/vuetifyjs/vuetify"
          target="_blank"
          outlined
          color="secondary lighten-2"
        >
          <v-icon left>mdi-vuetify</v-icon>
          GitHub
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head: {
    title: "About"
  }
}
</script>
