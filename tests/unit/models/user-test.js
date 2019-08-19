import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | user', function(hooks) {
  setupTest(hooks);

  test('it has a default level', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('user', {});
    assert.equal(model.level, 0);
  });
});
