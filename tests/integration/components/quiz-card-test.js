import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | quiz-card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders questions', async function(assert) {
    this.set('questions', [{ id: 1,
      question: 'What is the velocity of a sparrow?',
      answers: [
        "English",
        "Hindi",
        "Spanish",
        "Mandarin"
      ],
    }]);

    await render(hbs`<QuizCard @questions={{questions}}></QuizCard>`);
    assert.dom('[data-test-question]').exists({ count: 1 });
    assert.dom('[data-test-question-question]').hasText('What is the velocity of a sparrow?');
    assert.dom('[data-test-question-answer]').exists({ count: 4 });
  });

  test('it calls the submit action', async function(assert) {
    assert.expect(1);

    this.set('myAction', () => assert.ok(true));

    await render(hbs`<QuizCard @onComplete={{action myAction}}></QuizCard>`);
    await click('button');
  });
});
