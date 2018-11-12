<template>
  <div>
    <app-navbar></app-navbar>
    <transition name="component-fade" mode="out-in">
    <router-view/>
    </transition>
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
  .component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .1s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>




// Change about page name
// Don't let modal pop up after first time
