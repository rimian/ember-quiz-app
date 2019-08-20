import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const quiz = this.store.findRecord('quiz', params.quiz_id);
    const questions = this.store.findAll('question');
    return { quiz, questions };
  },
});
