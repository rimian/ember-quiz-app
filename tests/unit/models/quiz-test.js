import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | quiz', function(hooks) {
  setupTest(hooks);

  test('it is a model', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('quiz', {});
    assert.ok(model);
  });
});
