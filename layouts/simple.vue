<template>
  <v-app>
    <v-main class="d-flex align-center justify-center">
      <Nuxt />
      <FunctionBar />
    </v-main>
  </v-app>
</template>

<style>
*::-webkit-scrollbar {
  width: .8rem;
  height: .4rem;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background-color: rgba(144,144,144,.5);
  border-radius: .2rem;
}
body::-webkit-scrollbar {
  display: none;
}
body {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
