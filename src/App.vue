<template>
  <div>
    <app-navbar></app-navbar>
    <router-view/>
  </div>
</template>

<script>
  import AppNavbar from './components/AppNavbar'

  export default {
    components: {
      AppNavbar
    }
  }
</script>

<style>

</style>




// Change about page name
// Don't let modal pop up after first time
