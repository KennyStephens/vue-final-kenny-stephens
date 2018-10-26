<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="field">
                    <div class="control">
                        <div class="select is-primary">
                            <select>
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
                <div class="column">
                <div class="field">
  <div class="control">
    <input class="input is-primary" type="number" placeholder="Primary input">
  </div>
</div>
            </div>
        </div>
        <button 
            class="button is-block is-success mb-5 is-large ma-auto" 
            @click="newYouGen"
            v-if="!loadingAnimation">Generate New You!</button>
            <transition name="fade">
            <div v-if="loadingAnimation">
                <h1 class="title has-text-centered mb-0">GENERATING...</h1>
                <img 
                    src="../assets/loader.gif" 
                    alt="Loading Animation" 
                    class="image ma-auto pa-2 mb-5 is-128x128">
            </div>
            </transition>
            <div class="columns">
                <div class="column img-column">
            <transition-group name="list" tag="div">
            <div 
                v-for="you in newYouData" 
                :key="you.name.first">
                    <figure class="image ma-auto">
                        <img 
                            class="is-rounded"
                            :src="you.picture.large">
                    </figure>
            </div>
            </transition-group>
                </div>
                <div class="column">
                <transition-group name="list" tag="div">
                <div 
                v-for="you in newYouData" 
                :key="you.name.first"
                class="has-text-centered">
                <div class="box is-size-4">
                    Your New First Name: <span class="has-text-primary has-text-weight-semibold is-size-3">{{ you.name.first.toUpperCase() }}</span>
                </div>
                 <div class="box is-size-4">
                    Your New Last Name: <span class="has-text-primary has-text-weight-semibold is-size-3">{{ you.name.last.toUpperCase() }}</span>
                </div>
                <div class="box is-size-4">
                    Your New Age: <span class="has-text-primary has-text-weight-semibold is-size-3">{{ you.dob.age }}</span>
                </div>
                  <div class="box is-size-4">
                    Your New Email: <span class="has-text-primary has-text-weight-semibold is-size-3">{{ you.email }}</span>
                </div>
                  <div class="box is-size-4">
                    Your New Nationality : <span class="has-text-primary has-text-weight-semibold is-size-3">{{ you.nat }}</span>
                </div>
            </div>
                </transition-group>
                </div>
            </div>


    </div>
</template>

<script>
export default {
  data() {
    return {
      newYouData: [],
      loadingAnimation: false
    };
  },
  methods: {
    newYouGen() {
        let gender = document.querySelector('select').value;
        console.log(gender.toLowerCase());
      this.loadingAnimation = true;
      setTimeout(() => {
        this.loadingAnimation = false;
        axios
          .get(`https://randomuser.me/api/?gender=${gender.toLowerCase()}` )
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
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100px);
}

.img-column {
  display: flex;
  align-items: center;
  justify-content: center;
}

figure {
  min-width: 200px;
}
</style>

