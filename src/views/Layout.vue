<template>
  <v-app>
    <v-navigation-drawer 
      app 
      v-model="drawer">Nav</v-navigation-drawer>
    <v-toolbar app clipped-left>
      <v-toolbar-side-icon @click.prevent="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>Footer</v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null
    }
  }
}
</script>

<style scoped>

</style>

