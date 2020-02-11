<template>
  <v-app id="app">
    <HelloWorld />
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import vuetify from '@/plugins/vuetify'
import { VApp } from 'vuetify/lib'

export default {
  name: 'app',
  vuetify,
  components: {
    HelloWorld,
    VApp
  }
}
</script>

<style>
@import '~vuetify/dist/vuetify.min.css';
@import '~material-design-icons-iconfont/dist/material-design-icons.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
