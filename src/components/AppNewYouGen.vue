<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="field results">
          <label class="label">Number of Results Requested</label>
            <div class="control">
              <input class="input is-primary" type="number" placeholder="Put Number Here">
            </div>
        </div>
      </div>
    </div>
  <button 
      class="button is-block is-success mb-5 is-large ma-auto" 
      @click="newYouGen"
      v-if="!loadingAnimation">Generate the NewYou!</button>
      <transition name="fade">
      <div v-if="loadingAnimation">
          <h1 class="title has-text-centered mb-0">GENERATING...</h1>
          <img 
              src="../assets/loader.gif" 
              alt="Loading Animation" 
              class="image ma-auto pa-2 mb-5 is-128x128">
      </div>
      </transition>
      
      <ul>    
        <div class="columns is-multiline">   
          <li 
            v-for="you in newYouData" 
            :key="you.name.first"
            class="column is-one-third box">
              <figure class="image ma-auto">
                <img 
                    class="is-rounded "
                    :src="you.picture.large">
              </figure>
              <p class="has-text-centered mt-2">Your New First Name: <br><span class="has-text-primary has-text-weight-semibold is-size-4">{{ you.name.first.toUpperCase() }}</span></p>
              <p class="has-text-centered">Your New Last Name: <br><span class="has-text-primary has-text-weight-semibold is-size-4">{{ you.name.last.toUpperCase() }}</span></p>
              <p class="has-text-centered">Your New Age: <br><span class="has-text-primary has-text-weight-semibold is-size-4">{{ you.dob.age }}</span></p>
              <p class="has-text-centered">Your New Email: <br><span class="has-text-primary has-text-weight-semibold is-size-4">{{ you.email }}</span></p>  
          </li>
        </div>
      </ul>
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../main";

export default {
  data() {
    return {
      newYouData: [],
      loadingAnimation: false,
      gender: ""
    };
  },
  created() {
    console.log("created");
    eventBus.$on("genderAnswer", gender => {
      this.gender = gender;
      console.log(this.gender);
    });
  },
  methods: {
    newYouGen() {
      let gender = this.gender.toLowerCase();
      let resultNumber = document.querySelector("input").value;

      this.loadingAnimation = true;
      setTimeout(() => {
        this.loadingAnimation = false;
        axios
          .get(
            `https://randomuser.me/api/?results=${resultNumber}&gender=${gender}`
          )
          .then(response => {
            this.newYouData = response.data.results;
            // console.log(this.newYouData);
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

figure {
  max-width: 150px;
}

figure img {
  box-shadow: 0px 3px 5px #666;
}

.results {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>

