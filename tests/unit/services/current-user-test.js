import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | current-user', function(hooks) {
  setupTest(hooks);

  test('it has a user', function(assert) {
    const service = this.owner.lookup('service:current-user');
    assert.ok(service.user);
  });

  test('it completes a level', function(assert) {
    const service = this.owner.lookup('service:current-user');
    const currentLevel = service.user.level;
    service.completeLevel();
    assert.equal(service.user.level, currentLevel + 1);
  });
});
