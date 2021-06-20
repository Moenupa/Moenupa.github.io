<template>
  <tr>
    <td><v-icon :color="getRandomColor()+` ${$vuetify.theme.dark ? 'lighten-2' : 'darken-2'}`">{{ info.icon }}</v-icon></td>
    <td>{{ info.name }}<v-chip small v-for="(tag, index) in info.tags" :key="index" :color="getRandomColor()+` ${$vuetify.theme.dark ? 'darken-4' : 'lighten-4'}`" class="ml-1 font-weight-light">{{ tag }}</v-chip></td>
  </tr>
</template>
<style>
</style>
<script>
export default {
  data() {
    return {
      colors: [
        "red",
        "pink",
        "purple",
        "deep-purple",
        "indigo",
        "blue",
        "light-blue",
        "cyan",
        "teal",
        "green",
        "light-green",
        "lime",
        "amber",
        "orange",
        "deep-orange",
        "brown",
        "blue-grey"
      ]
    }
  },
  methods: {
    getRandomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    }
  },
  props: {
    info: {
      type: Object
      // name: ""
      // icon: ""
      // tags: []
    }
  }
}
</script>