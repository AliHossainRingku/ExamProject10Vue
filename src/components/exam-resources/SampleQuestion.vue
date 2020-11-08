<template>
    <li>
        <base-card>
            <header>
                <h3>{{question}}</h3>
                <base-button mode="flat" @click="deleteQuestion(id)">Delete</base-button>
            </header>
            <form @submit.prevent="submitAnswer(yourAnswer)">
              <p><input type="radio" name="yourAnswer" v-model="yourAnswer" value="A"/> {{optionA}}</p>
              <p><input type="radio" name="yourAnswer" v-model="yourAnswer" value="B"/> {{optionB}}</p>
              <p><input type="radio" name="yourAnswer" v-model="yourAnswer" value="C"/> {{optionC}}</p>
              <p><input type="radio" name="yourAnswer" v-model="yourAnswer" value="D"/> {{optionD}}</p>
              
              <footer>
                <!--base-button v-if="!ansIsSubmitted" mode="flat">{{ansIsSubmitted==false ? 'Submit Now':'Submitted'}}</base-button-->
                <base-button mode="flat" @click="toggleResult">{{ansIsVisible==false ? 'Show Answer':'Hide Answer'}}</base-button>
              </footer>
            </form>
            <nav v-if="ansIsVisible">
                <p v-if="yourAnswer===optionAnswer" class="correct">Congrats! Your answer {{ yourAnswer }} is correct.</p>
                <p v-else-if="yourAnswer===null" class="incorrect">Sorry, you did not select any option.</p>
                <p v-else class="incorrect">Sorry, Your answer {{ yourAnswer }} is incorrect.</p>
                <p>Correct Option: {{optionAnswer}}</p>
                <a>Note: </a> {{note}}
            </nav>
        </base-card>
    </li>
</template>

<script>
export default {
    props: ['id','question','optionA','optionB','optionC','optionD','optionAnswer','note'],
    inject: ['deleteQuestion'],

    data(){
      return{
        ansIsVisible: false,
        ansIsSubmitted: false,
        yourAnswer: null,
      }
    },
    computed: {
      ansIsSubmittedAlready: true
    },
    methods: {
      toggleResult(){
        this.ansIsVisible = !this.ansIsVisible
        this.ansIsSubmitted = true
      },
      submitAnswer(yourAnswer){
        this.ansIsSubmitted = true
        this.yourAnswer = yourAnswer
        console.log(this.yourAnswer)
      }
    }
}
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}

.correct{ color: green}
.incorrect{ color: red}
</style>