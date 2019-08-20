import { module, test } from 'qunit';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | quiz view', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /quizzes/:id', async function(assert) {
    this.server.create('quiz');

    await visit('/quizzes/1');

    assert.dom('[data-test-title]').hasText('Quiz 1');
    assert.equal(currentURL(), '/quizzes/1');
  });

  test('the quiz has the questions in it', async function(assert) {
    this.server.create('quiz', { question_ids: [3, 4] });
    this.server.createList('question', 5);

    await visit('/quizzes/1');

    assert.dom('[data-test-question="3"]').exists();
    assert.dom('[data-test-question="4"]').exists();
    assert.dom('[data-test-question]').exists({ count: 2 });
  });

  test('the quiz completes', async function(assert) {
    this.server.createList('quiz', 2);
    this.server.createList('question', 2);

    await visit('/quizzes/1');
    await click('button');
    assert.equal(currentURL(), '/quizzes');

    assert.dom('[data-test-quiz="2"] a').hasText('Take this quiz');
  });
});
