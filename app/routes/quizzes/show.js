import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const { quizzes } = this.modelFor('quizzes');
    const quiz = quizzes.filter((q) => q.id == params.quiz_id).firstObject;

    return { quiz };
  },
});
