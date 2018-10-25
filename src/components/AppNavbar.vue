<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="kennystephens.com">
      <i class="fas fa-users fa-3x"></i>
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>

        <router-link class="navbar-item" to="/about">About</router-link>

        <router-link class="navbar-item" to="/contact">Contact</router-link>
    </div>

  </div>
</nav>
</template>

<script>
    
</script>

<style>
    a.router-link-exact-active {
        color: #42b983;
    }
</style>

