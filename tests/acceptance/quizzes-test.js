import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | quizzes', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /quizzes', async function(assert) {
    await visit('/quizzes');
    assert.dom('[data-test-title]').hasText('Quizzes');
    assert.equal(currentURL(), '/quizzes');
  });
});
