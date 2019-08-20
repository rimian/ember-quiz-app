import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  currentUser: service(),

  actions: {
    completeQuiz() {
      this.currentUser.completeLevel();
      this.transitionToRoute('quizzes');
    },
  },
});
