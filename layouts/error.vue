<template>
  <v-container class="d-flex justify-center align-center">
    <div
      class="d-flex justify-space-around align-center module"
      style="bottom: 20%;"
    >
      <v-fade-transition>
        <div
          v-show="error.statusCode != 404"
          class="text-center blue-grey--text text-md-h2 text-sm-h3 text-h4"
        >
          Error: {{ this.error ? this.error.statusCode : "Unknown" }}
        </div>
      </v-fade-transition>
    </div>
    <div class="d-flex justify-space-around align-center module">
      <v-fade-transition>
        <lottie-player
          v-show="$vuetify.theme.dark && error.statusCode == 404"
          src="https://assets4.lottiefiles.com/packages/lf20_4DPcyu.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </v-fade-transition>
    </div>
    <div class="d-flex justify-space-around align-center module">
      <v-fade-transition>
        <lottie-player
          v-show="!$vuetify.theme.dark && error.statusCode == 404"
          src="https://assets4.lottiefiles.com/packages/lf20_cg9lvxff.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </v-fade-transition>
    </div>
    <div class="d-flex justify-space-around align-center module">
      <v-fade-transition>
        <lottie-player
          v-show="$vuetify.theme.dark && error.statusCode != 404"
          src="https://assets10.lottiefiles.com/packages/lf20_RYmOmk.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </v-fade-transition>
    </div>
    <div
      class="d-flex justify-space-around align-center module"
      style="width: 40%;"
    >
      <v-fade-transition>
        <lottie-player
          v-show="!$vuetify.theme.dark && error.statusCode != 404"
          src="https://assets9.lottiefiles.com/packages/lf20_8KZ9eh.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </v-fade-transition>
    </div>
    <div
      class="d-flex justify-space-around align-center module"
      style="width: 200px; bottom: 10%; z-index: 999;"
    >
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn fab v-bind="attrs" v-on="on" @click="history.back()">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </template>
        <span>Return to Last Page</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn to="/links" nuxt fab v-bind="attrs" v-on="on">
            <v-icon>mdi-map-marker-radius</v-icon>
          </v-btn>
        </template>
        <span>Return to Navigation Page</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn to="/" nuxt fab v-bind="attrs" v-on="on">
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </template>
        <span>Return to Home Page</span>
      </v-tooltip>
    </div>
  </v-container>
</template>

<script>
export default {
  layout: "default",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      // err404: '404 Not Found',
      // errother: 'An error occurred'
    };
  },
  head() {
    const title = this.error ? this.error.statusCode : "Unknown";
    const titleTemplate = "Error - %s";
    return {
      title,
      titleTemplate
    };
  }
};
</script>

<style scoped>
.module {
  position: fixed;
  width: 50%;
}
</style>
