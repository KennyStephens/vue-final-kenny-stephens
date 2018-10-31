<template>
    <div class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <app-intro-questions @questionAnswers="questionAnswers = $event"></app-intro-questions>
                
                <h1 class="is-size-1 has-text-centered has-text-weight-semibold">Welcome <span class="has-text-primary">{{ questionAnswers.firstName }} {{questionAnswers.lastName}}</span> to NewYou!</h1>
                <h1 class="subtitle has-text-centered is-size-4">Are you sick of your current life? Want to start <span class="has-text-success is-size-3 has-text-weight-semibold">fresh</span>? Well you've come to the right place. Here at NewYou, the possibilities are endless! Go ahead and click the <span class="has-text-success is-size-3">'Generate the NewYou'</span> button below and become the new you.</h1>
            
                <app-new-you-gen></app-new-you-gen>
            </div>
        </div>
    </div>
</template>

<script>
    import AppNewYouGen from '../components/AppNewYouGen.vue'
    import AppIntroQuestions from '../components/AppIntroQuestions.vue'

    export default {
        components: {
            AppNewYouGen,
            AppIntroQuestions
        },
        data() {
            return {
                questionAnswers: {
                    firstName: '',
                    lastName: ''
                }
            }
        }
    }
</script>

<style scoped>
    .is-fullheight {
        background-image: url(../assets/main-background.jpg);
        background-size: cover;
    }
</style>
