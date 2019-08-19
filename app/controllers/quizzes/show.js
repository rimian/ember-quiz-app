import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  questions: computed('model', function() {
    const question = (id) => this.model.questions.filter((q) => q.id == id).firstObject;
    return this.model.quiz.question_ids.map((question_id) => question(question_id));
  }),
});
