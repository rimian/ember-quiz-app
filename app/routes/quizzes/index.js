import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  currentUser: service(),

  model() {
    const quizzes = this.store.findAll('quiz');
    const level = this.currentUser.user.level;
    return { quizzes, level };
  },
});
