const App = {
  data() {
    return {
    showMain: true,
    showSocial: false,
    showQuestions: false,
    showResult: false, 
    number: 0,
    questions: questions, 
    score: {
      'high': 0,
      'medium': 0,
      'low': 0
    },
    totalGame: localStorage.getItem('sc2TotalGame') ? JSON.parse(localStorage.getItem('sc2TotalGame')) : {
      'high': 0,
      'medium': 0,
      'low': 0
    },
    results: results,
    resultRace: 'infested'      
    }        
  },
  methods: {
    goToMain() {
      this.showMain = true
      this.showSocial = false
      this.showQuestions = false
      this.showResult = false
    },
    goToSocial() {
      this.showMain = false
      this.showSocial = true
    },
    goToResult(race) {
      this.showMain = false
      this.showSocial = false
      this.showQuestions = false
      this.showResult = true
      this.resultRace = race
    },
    goToQuestions() {
      this.score = {
        'high': 0,
        'medium': 0,
        'low': 0
        }
      this.showMain = false
      this.showQuestions = true
    },
    nextQuestions(answer) {
      if (this.number == 9) {
        this.number = 0
        this.endGame();
      } else {
        this.number++
      }
      eval(answer);
    },
    endGame() {
      //Высокая степень экологической осознанности
      if(this.score.high - this.score.medium > this.score.low - this.score.medium) {
        this.goToResult('high')
        this.totalGame.high++
      } 
      //Средняя степень экологической осознанности
      else if(this.score.high - this.score.medium == this.score.low - this.score.medium) {
        this.goToResult('medium')
        this.totalGame.medium++
      }
      //Низкая степень экологической осознанности
      else if(this.score.high - this.score.medium < this.score.low - this.score.medium) {
        this.goToResult('low')
        this.totalGame.low++
      }
      localStorage.setItem('sc2TotalGame', JSON.stringify(this.totalGame))
    },
  },

  computed: {
    totalScore() {
      let score=0
      for (let i in this.totalGame) {
        score+=(this.totalGame[i])
      }
      return score
    },
    openRaces() {
      let count=0
      for (let i in this.totalGame) {
        if(this.totalGame[i] > 0) count++
      }
      return count
    },
    favoriteRace() {
      let max = 'zerg'
      for (let i in this.totalGame) {
        if(this.totalGame[i] > this.totalGame[max]) max=i
      }
      return results[max].name
    },
  }
}
Vue.createApp(App).mount('#app')