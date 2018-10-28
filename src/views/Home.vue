<template>
    <div class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                
                <h1 class="is-size-1 has-text-centered has-text-primary has-text-weight-semibold">Welcome to NewYou</h1>
                <h1 class="subtitle has-text-centered is-size-4">Are you sick of your current life? Want to start <span class="has-text-success is-size-3 has-text-weight-semibold">fresh</span>? Well you've come to the right place. Here at NewYou, the possibilities are endless and the wait time is short. Go ahead click the NewYou Generator and become the new you.</h1>
                <p class="has-text-centered is-size-4">First give us a little bit of info.</p>
                <hr class="is-text-primary">

                <app-new-you-gen></app-new-you-gen>
            </div>
        </div>
    </div>
</template>

<script>
    import AppNewYouGen from '../components/AppNewYouGen.vue'

    export default {
        components: {
            AppNewYouGen
        }
    }
</script>

<style scoped>
    .is-fullheight {
        background-image: url(../assets/main-background.jpg);
        background-size: cover;
    }
</style>
