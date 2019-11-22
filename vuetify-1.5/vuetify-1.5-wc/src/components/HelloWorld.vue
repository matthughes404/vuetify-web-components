<template>
  <v-app>
    <div class="hello">
      <h1>This is a Vue.js Web Component, with Vuetify 1.5.21</h1>
      <br />
      <p>
        <v-text-field label="Regular Text Field" placeholder="Placeholder Text"></v-text-field>
        <v-select :items="selectItems" label="Standard Select Field"></v-select>
        <br />
        <v-btn color="success">Success Button</v-btn>
        <v-btn color="error">Error Button</v-btn>
        <v-btn color="warning">Warning Button</v-btn>
        <v-btn color="info">Info Button</v-btn>
        <br /><br /><br />
        <v-icon large>home</v-icon>
        <v-icon large>event</v-icon>
        <v-icon large>info</v-icon>
        <v-icon large>arrow_back</v-icon>
        <v-icon large>arrow_forward</v-icon>
        <v-icon large>check</v-icon>
        <v-icon large>close</v-icon>
        <v-icon large>refresh</v-icon>
      </p>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    selectItems: ['Item 1', 'Item 2', 'Item 3', 'Item 4']
  }),
  mounted() {
    var vuetifyThemeCss = document.getElementById('vuetify-theme-stylesheet');

    var template = document.querySelector('custom-component');
    if (template != null)
    {
      var shadowDomTheme = document.createElement('style');
      shadowDomTheme.innerHTML = vuetifyThemeCss.innerHTML;

      template.shadowRoot.appendChild(shadowDomTheme);
    }
  }
}
</script>

<style scoped>
@import '~vuetify/dist/vuetify.min.css';
@import '~material-design-icons-iconfont/dist/material-design-icons.css';

.hello {
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #cccccc;
}
.material-icons {
  margin: 0 10px;
}
</style>
