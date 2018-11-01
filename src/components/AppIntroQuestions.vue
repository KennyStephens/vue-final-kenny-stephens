<template>
<form>
<transition name="fade" appear>
  <div v-if="showQuestions" class="section intro-questions has-background-info box">
    <span @click="closeQuestions"><i class="fas fa-times-circle fa-2x is-pulled-right"></i></span>
        <p class="is-size-2 has-text-centered has-text-light has-text-weight-semibold">{{ introQuestions[questionCounter].question}}</p>
        <p class="label">{{ introQuestions[questionCounter].label }}</p>
        <input 
          class="input is-primary mb-2 first-name"
          v-if="questionCounter === 1 ? true : false" 
          type="text" 
          placeholder="First Name"
          v-model="questionAnswers.firstName"
          required>
          <transition name="slide-fade">
          <p v-if="requiredInputFirst" class="has-text-danger has-text-weight-semibold">REQUIRED</p>
          </transition>
        <input 
          class="input is-primary mb-2 last-name"
          v-if="questionCounter === 2 ? true : false"  
          type="text" 
          placeholder="Last Name"
          v-model="questionAnswers.lastName">
          <transition name="slide-fade">
          <p v-if="requiredInputLast" class="has-text-danger has-text-weight-semibold">REQUIRED</p>
          </transition>
       <div 
        class="select mb-2" 
        v-if="questionCounter === 3 ? true : false"
        :style="{width: '100%'}">
        <select
          class="is-primary"
          v-model="questionAnswers.gender"
          :style="{width: '100%'}">
        <option v-for="(gender, i) in genders" :key="i">{{ gender }}</option>
        </select>
       </div>
     <transition name="slide-fade">              
     <a class="button is-primary is-block has-text-centered" @click="changeQuestion" v-if="buttonDisplay">
      <span>NEXT</span>
      <span class="icon">
      <i class="fas fa-arrow-circle-right"></i>
      </span>
    </a>
     </transition>
  </div>
</transition>
</form>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      introQuestions: [
        { question: "Welcome to NewYou! Please answer a couple of questions before we get started."},
        { question: "What is your first name?", label: "First Name" },
        { question: "What is your last name?", label: "Last Name" },
        { question: "What is your gender?", label: "Gender" },
        { question: "Thanks!" }
      ],
      questionCounter: 0,
      showQuestions : true,
      genders: ["Male", "Female"],
      requiredInputFirst: false,
      requiredInputLast: false,
      buttonDisplay: true,
      questionAnswers: {
        firstName: "",
        lastName: "",
        gender: "",
      }
    };
  },
  methods: {
    changeQuestion() {
      if (this.questionCounter < this.introQuestions.length - 1) {
        this.questionCounter++;
      } else {
        this.$emit("questionAnswers", this.questionAnswers);
        eventBus.$emit("genderAnswer", this.questionAnswers.gender);
        this.showQuestions = false;
      }
    },
    closeQuestions() {
      this.showQuestions = false;
    },
    loadQuestions() {
      if(sessionStorage.getItem('loadQuestions') === null) {
      this.showQuestions = true;
      sessionStorage.setItem('loadQuestions', this.showQuestions);
      console.log('Worked!');
    } else {
      this.showQuestions = false;
    }
    }
  },
  watch: {
    questionCounter() {
      if(this.questionCounter === 1) {
        this.buttonDisplay = false;
        this.requiredInputFirst = true;
      } else if (this.questionCounter === 2) {
          this.buttonDisplay = false;
          this.requiredInputFirst = false;
          this.requiredInputLast = true;
      } 
    },
    'questionAnswers.firstName': function() {
      console.log(this.questionAnswers.firstName);
      if(this.questionAnswers.firstName.length > 0) {
        this.requiredInputFirst = false;
        this.buttonDisplay = true;
      } else {
        this.requiredInputFirst = true;
        this.buttonDisplay = false;
      }
    },
    'questionAnswers.lastName': function() {
      console.log(this.questionAnswers.lastName);
      if(this.questionAnswers.lastName.length > 0) {
        this.requiredInputLast = false;
        this.buttonDisplay = true;
      } else {
        this.requiredInputLast = true;
        this.buttonDisplay = false;
      }
    }
  },
  beforeMount() {
    this.loadQuestions();
  }
};
</script>

<style scoped>
  .intro-questions {
    position: absolute;
    z-index: 1;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.95;
    width: 600px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.7s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 0.7s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(-100px);
  }

  .fa-times-circle {
    margin-top: -30px;
    font-size: 18px;
    margin-right: -10px;
  }

  .fa-times-circle:hover {
    opacity: .7;
    cursor: pointer;
  }

  .slide-fade-enter-active {
  transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(3px);
    opacity: 0;
  }

</style>


