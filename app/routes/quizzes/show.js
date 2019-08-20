import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('quiz', params.quiz_id).then((quiz) => {
      // TODO: relationships
      const isQuizQuestion = (id) => quiz.question_ids.includes(parseInt(id));

      return this.store.findAll('question').then((results) => {
        const questions = results.filter((question) => isQuizQuestion(question.id));
        return { quiz, questions };
      });
    });
  },
});
