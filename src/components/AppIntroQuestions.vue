<template>
  <div class="section intro-questions has-background-info box">
        <p class="is-size-2 has-text-centered has-text-light has-text-weight-semibold">{{ introQuestions[questionCounter].question}}</p>
        <p class="label">{{ introQuestions[questionCounter].label }}</p>
        <input 
          class="input is-primary mb-4 first-name"
          v-if="questionCounter === 1 ? true : false" 
          type="text" 
          placeholder="First Name"
          v-model="questionAnswers.firstName">
        <input 
          class="input is-primary mb-4 last-name"
          v-if="questionCounter === 2 ? true : false"  
          type="text" 
          placeholder="Last Name"
          v-model="questionAnswers.lastName">
       <div 
        class="select mb-4" 
        v-if="questionCounter === 3 ? true : false"
        style="width: 100%;">
        <select
          class="is-primary"
          v-model="questionAnswers.gender"
          style="width: 100%;">
        <option v-for="(gender, i) in genders" :key="i">{{ gender }}</option>
        </select>
       </div>
           
       
                
     <a class="button is-primary is-block has-text-centered" @click="changeQuestion">
       <span>NEXT</span>
    <span class="icon">
      <i class="fas fa-arrow-circle-right"></i>
    </span>
    
  </a>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      introQuestions: [
        {
          question:
            "Welcome to NewYou! Please answer a couple of questions before we get started."
        },
        { question: "What is your first name?", label: "First Name" },
        { question: "What is your last name?", label: "Last Name" },
        { question: "What is your gender?", label: "Gender" },
        { question: "Thanks!" }
      ],
      questionCounter: 0,
      genders: ["Male", "Female"],
      questionAnswers: {
        firstName: "",
        lastName: "",
        gender: ""
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

        document.querySelector(".intro-questions").style.display = "none";
      }
    }
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
</style>


