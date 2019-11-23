<template>
 <v-app>
    <div class="hello">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>Welcome to Your Vue.js App, with Vuetify 2.1.11</h1>
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
    })
}
</script>

<style scoped>
.hello {  
  width: 50%;
  margin: 60px auto 0;
  text-align: center;
}
.v-btn {
  margin: 0 10px;
}
.material-icons {
  margin: 0 10px;
}
</style>