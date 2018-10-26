<template>
    <div class="container">
        <button 
            class="button is-block is-success mb-5 is-large ma-auto" 
            @click="newYouGen">Generate New You!</button>
            <div v-if="loadingAnimation">
                <h1 class="title has-text-centered mb-0">GENERATING...</h1>
                <img src="../assets/loader.gif" alt="Loading Animation" class="image ma-auto is-128x128">
            </div>
          <div 
            v-for="you in newYouData" 
            :key="you.name.first"
            class="box has-text-centered">
                <figure class="image is-128x128 ma-auto">
                    <img 
                        :src="you.picture.large">
                </figure>
               
               {{ you.gender }} - {{ you.name.first }} - {{ you.name.last }} - {{ you.email }}
                  
                </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newYouData: [],
                loadingAnimation: false
            }
        },
        methods: {
            newYouGen() {
                this.loadingAnimation = true;
                setTimeout(() => {
                    this.loadingAnimation = false;
                    axios.get('https://randomuser.me/api/')
                    .then(response => {
                    this.newYouData = response.data.results;
                    console.log(this.newYouData);
                    })
                    .catch(error => {
                    console.log(error);
                    });  
                }, 3000);

            }
        }
    }
</script>

<style scoped>

</style>

