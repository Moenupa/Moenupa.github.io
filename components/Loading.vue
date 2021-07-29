<template>
  <div v-if="loading" class="d-flex flex-column justify-center align-center loading-page">
    <section><span class="loader-59"></span></section>
  </div>
</template>
<script>
  export default {
    data: () => ({
      loading: false,
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      },
    },
  }
</script>
<style lang="scss">
  $base: #99999999;
  $lite:  #99999944;
  $bg: #99999911;
  $size: 48px;
  .loading-page {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;
    padding: 1rem;
    text-align: center;
    font-size: 3rem;
    margin-left: (-1 * $size);
    margin-top: (-1 * $size);
  }  
  .loader-59 {
    // source: https://codepen.io/vineethtrv/pen/NWxZqMM
    width : $size;
    height: $size;
    display: inline-block;
    position: relative;
    transform: rotate(45deg);
    &::before {
      content: '';
      width : $size/2;
      height: $size/2;
      position: absolute;
      left: 0;
      top: -($size/2);
      animation: animloader59 4s ease infinite;
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width : $size/2;
      height: $size/2;
      background: $base;
      box-shadow:0 0 10px $base;
      animation: animloader56 2s ease infinite;
    }
  }

  @keyframes animloader56{
    0%{ transform: translate(0, 0) rotateX(0) rotateY(0)}
    25%{ transform: translate(100%, 0) rotateX(0) rotateY(180deg)}
    50%{ transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg)}
    75%{ transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg)}
    100%{ transform:  translate(0, 0) rotateX(0) rotateY(360deg) }
  }

  @keyframes animloader59 {
    0%  { box-shadow: 0 24px $bg, 24px 24px $bg, 24px 48px $bg, 0px 48px $bg }
    12%  { box-shadow: 0 24px $lite, 24px 24px $bg, 24px 48px $bg, 0px 48px $bg }
    25% { box-shadow: 0 24px $lite, 24px 24px $lite, 24px 48px $bg, 0px 48px $bg }
    37% { box-shadow: 0 24px $lite, 24px 24px $lite, 24px 48px $lite, 0px 48px $bg }
    50% { box-shadow: 0 24px $lite, 24px 24px $lite, 24px 48px $lite, 0px 48px $lite }
    62% { box-shadow: 0 24px $bg, 24px 24px $lite, 24px 48px $lite, 0px 48px $lite }
    75% { box-shadow: 0 24px $bg, 24px 24px $bg, 24px 48px $lite, 0px 48px $lite }
    87%{ box-shadow: 0 24px $bg, 24px 24px $bg, 24px 48px $bg, 0px 48px $lite }
    100%{ box-shadow: 0 24px $bg, 24px 24px $bg, 24px 48px $bg, 0px 48px $bg }
  }
</style>
