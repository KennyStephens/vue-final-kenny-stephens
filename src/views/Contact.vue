<template>
    <div class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
              <section class="mb-5">
                <h1 class="is-size-1 has-text-centered has-text-primary has-text-weight-semibold">Questions or Concerns?</h1>
                <h1 class="subtitle has-text-centered is-size-4">Shoot us an email and we'll get back to you ASAP!</h1>
              </section>
                
                
                <section class="email-section pa-5 box hvr-bounce-to-top has-background-link">
                  
                  <h1 class="subtitle has-text-centered is-size-4 email-primary has-text-light">EMAIL US!</h1>
                  <a href="mailto:newyousupport@newyou.com"><h1 class="subtitle has-text-centered is-size-4 email-secondary has-text-light">newyousupport@newyou.com</h1></a>
                  
                </section>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
  .email-section {
    position: relative;
  }

  .email-section:hover {
    cursor: pointer;
  }
  .email-primary, .email-secondary {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.2s ease-in-out;
  }

  .email-secondary {
    opacity: 0;
    position: absolute;
  }

  .email-section:hover .email-primary {
    opacity: 0;
  }

  .email-section:hover .email-secondary {
    opacity: 1;
  }

  /* Bounce To Top */
.hvr-bounce-to-top {
  display: block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.hvr-bounce-to-top:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:hsl(171, 100%, 41%);
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-bounce-to-top:hover, .hvr-bounce-to-top:focus, .hvr-bounce-to-top:active {
  color: white;
}
.hvr-bounce-to-top:hover:before, .hvr-bounce-to-top:focus:before, .hvr-bounce-to-top:active:before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}

</style>

