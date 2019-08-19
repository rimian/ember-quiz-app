import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | quizzes/index', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:quizzes/index');
    assert.ok(controller);
  });
});
