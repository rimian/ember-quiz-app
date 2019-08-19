import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  store: service(),

  user: computed('store', function() {
    return this.store.createRecord('user');
  }),

  completeLevel() {
    this.incrementProperty('level');
  },
});
