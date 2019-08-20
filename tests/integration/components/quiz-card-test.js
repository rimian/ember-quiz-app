import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | quiz-card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders questions', async function(assert) {
    const question = EmberObject.create({
      id: 1,
      question: 'What is the velocity of a sparrow?',
      answers: [ "English", "Hindi", "Spanish", "Mandarin" ],
    });

    this.set('questions', [question]);

    await render(hbs`<QuizCard @questions={{questions}}/>`);
    assert.dom('[data-test-question]').exists({ count: 1 });
    assert.dom('[data-test-question-question]').hasText('What is the velocity of a sparrow?');
    assert.dom('[data-test-question-answer]').exists({ count: 4 });
    assert.dom('input').exists({ count: 4 });
  });

  test('it calls the submit action if all the answers are correct', async function(assert) {
    assert.expect(1);

    const question = EmberObject.create({
      id: 1,
      question: 'What is the velocity of a sparrow?',
      answers: ['African', 'European', 'I don\'t know'],
      correct_answer: 2,
    });

    this.set('questions', [question]);

    this.set('myAction', () => assert.ok(true));

    await render(hbs`<QuizCard @onComplete={{action myAction}} @questions={{questions}}/>`);

    await click('[data-test-input-answer="2"]');
    await click('button');
  });

  test('it does not call the submit action if there is a wrong answer', async function(assert) {
    assert.expect(1);

    const question = EmberObject.create({
      id: 1,
      question: 'What is the velocity of a sparrow?',
      answers: ['African', 'European', 'I don\'t know'],
      correct_answer: 2,
    });

    this.set('questions', [question]);

    this.set('myAction', () => assert.ok(true)); // never runs

    await render(hbs`<QuizCard @onComplete={{action myAction}} @questions={{questions}}/>`);

    await click('[data-test-input-answer="0"]');
    await click('button');
    assert.ok(true); // required to get test to pass. See expect() above
  });
});
