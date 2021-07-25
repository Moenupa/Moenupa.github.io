<template>
  <tr>
    <td>
      <v-icon :color="$themer.color.seeded(info.name)">{{ info.icon }}</v-icon>
    </td>
    <td>
      {{ info.name
      }}<v-chip
        small
        v-for="(tag, index) in info.tags"
        :key="index"
        :color="$themer.color.seeded(tag, true)"
        class="ml-1 font-weight-light"
        >{{ tag }}</v-chip
      >
    </td>
  </tr>
</template>
<style></style>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  props: {
    info: {
      type: Object,
      required: true
    }
  }
};
</script>
