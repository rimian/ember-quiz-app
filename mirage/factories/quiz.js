import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Quiz ${i + 1}`;
  },

  question_ids() {
    return [];
  },
});
