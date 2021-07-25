<template>
  <v-img
    :height="img.height ? (img.height < 0 ? null : img.height) : `250`"
    :lazy-src="img.lottie || img.type > 0 ? null : $themer.gallery.loading"
    :src="$themer.gallery.get(img.src, img.slug)"
    :alt="img.slug ? img.slug : `img-alt`"
  >
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
          v-if="img.simple"
        ></v-progress-circular>
        <lottie-player
          v-else
          :src="get()"
          :background="bg()"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </v-row>
    </template>
  </v-img>
</template>

<script>
export default {
  props: {
    img: Object
  },
  data() {
    return {
      std:
        "https://assets8.lottiefiles.com/datafiles/w8kbBwzPRk7sTCe/data.json",
      tag:
        "https://assets10.lottiefiles.com/datafiles/FhxLq41wsIS6M7I/data.json",
      unicorn: "https://assets2.lottiefiles.com/packages/lf20_kJNwM4.json",
      profile: "https://assets7.lottiefiles.com/packages/lf20_sedl1vh6.json",
      avatar:
        "https://assets7.lottiefiles.com/private_files/lf30_c0ujh33h.json",
      multiavatar:
        "https://assets2.lottiefiles.com/packages/lf20_n5icqxkw.json",
      load: "https://assets3.lottiefiles.com/private_files/lf30_czmjkzqg.json"
    };
  },
  methods: {
    get() {
      if (this.img.lottie) return this.img.lottie;

      switch (this.img.type) {
        case 0:
          return this.load;
        case 1:
          return this.profile;
        case 2:
          return this.tag;
        default:
          return this.load;
      }
    },
    bg() {
      const typeMap = {};
      if (this.img.bg) return this.img.bg;
      if (typeMap[this.img.type])
        return typeMap[this.img.type][this.$vuetify.theme.dark];
      return "transparent";
    }
  }
};
</script>
