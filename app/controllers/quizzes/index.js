import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  availableQuizzes: computed('model', 'userLevel', function() {
    return this.model.quizzes.slice(0, this.model.level);
  }),

  unCompletedQuizzes: computed('model', 'userLevel', function() {
    return this.model.quizzes.slice(this.model.level);
  }),
});
