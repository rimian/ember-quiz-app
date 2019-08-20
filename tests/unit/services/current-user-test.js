import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | current-user', function(hooks) {
  setupTest(hooks);

  test('it has a user', function(assert) {
    const service = this.owner.lookup('service:current-user');
    assert.ok(service.user);
  });
});
