<template>
  <v-speed-dial
    v-model="fab"
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :direction="direction"
    :open-on-hover="hover"
    :transition="transition"
    id="function-bar"
    style="position: fixed; z-index: 999;"
  >
    <template v-slot:activator>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" v-model="fab" fab>
            <v-icon>{{ fab ? "mdi-close" : "mdi-function-variant" }}</v-icon>
          </v-btn>
        </template>
        <span>{{ fab ? "Close" : "Functions" }}</span>
      </v-tooltip>
    </template>
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          @click="scrollTop()"
          v-show="visible"
          fab
          small
        >
          <v-icon>mdi-arrow-up-drop-circle-outline</v-icon>
        </v-btn>
      </template>
      <span>Return to Top</span>
    </v-tooltip>
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          @click="$themer.darkmode.switch()"
          fab
          small
        >
          <v-icon>{{
            $vuetify.theme.dark
              ? "mdi-moon-waning-crescent"
              : "mdi-weather-sunny"
          }}</v-icon>
        </v-btn>
      </template>
      <span>{{
        $vuetify.theme.dark ? "Switch to Light Theme" : "Switch to Dark Theme"
      }}</span>
    </v-tooltip>
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" fab small to="/links" nuxt>
          <v-icon>mdi-map-marker-radius</v-icon>
        </v-btn>
      </template>
      <span>Navigation Page</span>
    </v-tooltip>
  </v-speed-dial>
</template>

<script>
export default {
  data() {
    return {
      direction: "top",
      fab: false,
      fling: false,
      hover: false,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: "slide-y-reverse-transition",
      visible: false
    };
  },
  methods: {
    scrollTop: function() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 20);
    },
    onScroll: function(e) {
      this.visible = window.scrollY > 150;
    }
  },
  mounted: function() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy: function() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>
