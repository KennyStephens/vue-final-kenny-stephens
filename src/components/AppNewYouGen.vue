<template>
    <div class="container">
       
                 <div class="columns">
            <div class="column">
                <div class="field">
                    <label class="label">Gender</label>
                    <div class="control">
                        <div class="select is-primary">
                            <select>
                            <option>Male</option>
                            <option>Female</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
                <div class="column">
                <div class="field">
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
                <transition-group name="list" tag="div">
                <li  v-for="you in newYouData" 
                    :key="you.name.first">
                          <div class="columns box mb-5">
                <div class="column img-column">
                
                <div>
                        <figure class="image ma-auto">
                            <img 
                                class="is-rounded"
                                :src="you.picture.large">
                        </figure>
                </div>
                
                    </div>
                    <div class="column">
                 
                    <div 
                    class="has-text-centered">
                    <div class="box is-size-4">
                        Your New First Name: <span class="has-text-primary has-text-weight-semibold is-size-4">{{ you.name.first.toUpperCase() }}</span>
                    </div>
                    <div class="box is-size-4">
                        Your New Last Name: <span class="has-text-primary has-text-weight-semibold is-size-4">{{ you.name.last.toUpperCase() }}</span>
                    </div>
                    <div class="box is-size-4">
                        Your New Age: <span class="has-text-primary has-text-weight-semibold is-size-4">{{ you.dob.age }}</span>
                    </div>
                    <div class="box is-size-4">
                        Your New Email: <span class="has-text-primary has-text-weight-semibold is-size-4">{{ you.email }}</span>
                    </div>
                    <div class="box is-size-4">
                        Your New Nationality : <span class="has-text-primary has-text-weight-semibold is-size-4">{{ you.nat }}</span>
                    </div>
                </div>
                
                    </div>
            </div>
                </li>
                </transition-group>
            </ul>
  


    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newYouData: [],
      loadingAnimation: false
    };
  },
  methods: {
    newYouGen() {
        let gender = document.querySelector('select').value.toLowerCase();
        let resultNumber = document.querySelector('input').value
        console.log(gender.toLowerCase());
      this.loadingAnimation = true;
      setTimeout(() => {
        this.loadingAnimation = false;
        axios
          .get(`https://randomuser.me/api/?results=${resultNumber}&gender=${gender}`)
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

figure img {
    box-shadow: 0px 3px 5px #666;
}
</style>

