import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
  currentUser: service(),

  userLevel: computed('currentUser.user', function() {
    return this.currentUser.user.level;
  }),

  completedQuizzes: computed('model.quizzes', function() {
    return this.model.quizzes.slice(0, this.userLevel);
  }),

  unCompletedQuizzes: computed('model.quizzes', function() {
    return this.model.quizzes.slice(this.userLevel);
  }),
});
