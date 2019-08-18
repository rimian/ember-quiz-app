import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    assert.dom('[data-test-title]').hasText('Ember Quizz App');
    assert.equal(currentURL(), '/');
  });
});
