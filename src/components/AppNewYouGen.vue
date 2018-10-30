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
        <div class="columns main-section is-multiline is-centered">   
          <div 
            v-for="(you, i) in newYouData" 
            :key="i.first"
            class="column is-one-quarter box">
              <figure class="image ma-auto">
                <img 
                    class="is-rounded mb-3"
                    :src="you.picture.large">
              </figure>
              <div class="user-content">
                <p class="has-text-centered">Your New First Name: <br><span class="has-text-primary has-text-weight-semibold is-size-5">{{ you.name.first.toUpperCase() }}</span></p>
                <p class="has-text-centered">Your New Last Name: <br><span class="has-text-primary has-text-weight-semibold is-size-5">{{ you.name.last.toUpperCase() }}</span></p>
                <p class="has-text-centered">Your New Age: <br><span class="has-text-primary has-text-weight-semibold is-size-5">{{ you.dob.age }}</span></p>
                <p class="has-text-centered">Your New Email: <br><span class="has-text-primary has-text-weight-semibold is-size-5">{{ you.email }}</span></p>  
                <span @click="favorited(i)"><i class="fas fa-star is-pulled-right"></i></span>
              </div>
          </div>
        </div>
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
      gender: "",
      localStorageData: []
    };
  },
  created() {
    // console.log("created");
    eventBus.$on("genderAnswer", gender => {
      this.gender = gender;
      // console.log(this.gender);
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
    },
    favorited(i) {
      // i.target.style.color = 'gold';
      // console.log(this.newYouData[i]);
      // this.localStorageData = JSON.parse(localStorage.getItem('newYouData'));
      // console.log(this.localStorageData);
      this.localStorageData.push(this.newYouData[i]);
      // console.log(this.localStorageData)
      localStorage.setItem('newYouData', JSON.stringify(this.localStorageData));
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

.main-section .column {
  margin: 100px 10px 10px 10px;
}

figure {
  max-width: 150px;
}

figure img {
  box-shadow: 0px 3px 5px #666;
  position: relative;
  bottom: 90px;
}

.fa-star {
  cursor: pointer;
}

.user-content {
  margin-top: -70px;
}

.results {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>

