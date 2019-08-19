import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | quiz view', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /quizzes/:id', async function(assert) {
    await visit('/quizzes/1');

    assert.dom('[data-test-title]').hasText('Quiz 1');
    assert.equal(currentURL(), '/quizzes/1');
  });

  test('the quiz has the questions in it', async function(assert) {
    await visit('/quizzes/1');

    assert.dom('[data-test-question="1"]').exists();
    // assert.dom('[data-test-question="2"]').exists();
    // assert.dom('[data-test-question="3"]').exists();
  });
});
