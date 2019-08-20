import { module, test } from 'qunit';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | quizzes', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /quizzes', async function(assert) {
    await visit('/quizzes');
    assert.dom('[data-test-title]').hasText('Quizzes');
    assert.equal(currentURL(), '/quizzes');
  });

  test('it lists the quizzes', async function(assert) {
    this.server.createList('quiz', 2);

    await visit('/quizzes');
    assert.dom('ul').exists();
    assert.dom('[data-test-quiz="1"]').containsText('Quiz 1');
    assert.dom('[data-test-quiz="2"]').containsText('Quiz 2');
  });

  test('it only allows the user to take the next quiz', async function(assert) {
    this.server.createList('quiz', 3);

    await visit('/quizzes');
    assert.dom('[data-test-quiz="1"] a').hasText('Take this quiz');
    assert.dom('[data-test-quiz="2"] a').doesNotExist();
    assert.dom('[data-test-quiz="3"] a').doesNotExist();
  });

  test('it links to the quiz', async function(assert) {
    this.server.create('quiz');

    await visit('/quizzes');
    await click('[data-test-quiz="1"] a');
    assert.equal(currentURL(), '/quizzes/1');
  });
});
