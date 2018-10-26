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




// -Add animiations as new person information is generated
// -figure out how to round image
// -move content from one view to the other
