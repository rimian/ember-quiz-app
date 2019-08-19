import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  userLevel: computed('model.level', function() {
    return this.model.level;
  }),

  availableQuizzes: computed('model.quizzes', function() {
    return this.model.quizzes.slice(0, this.userLevel);
  }),

  unCompletedQuizzes: computed('model.quizzes', function() {
    return this.model.quizzes.slice(this.userLevel);
  }),
});
