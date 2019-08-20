import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.questions.forEach((q) => q.set('correct', false));
  },

  allCorrect() {
    return this.questions.filterBy('correct').length === this.questions.length;
  },

  actions: {
    buttonClick() {
      // debugging
      // console.log('a', this.questions.map((q) => q.correct_answer));
      if(this.allCorrect()) {
        this.onComplete();
      }
    },

    setAnswer(question, index) {
      question.set('correct', question.correct_answer === index);
    },
  },
});
