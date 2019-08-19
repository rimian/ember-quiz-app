import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | quizzes/show', function(hooks) {
  setupTest(hooks);

  test('it has questions', function(assert) {
    const controller = this.owner.lookup('controller:quizzes/show');

    const quiz = {
      "id": 1,
      "title": "Quiz 1",
      "question_ids": [1, 2, 3]
    };

    const questions = [
      {
        "id": 1,
        "question": "What is the second largest country (total area)?",
        "answers": [],
      },
      {
        "id": 2,
        "question": "What is the most common language?",
        "answers": [],
      },
      {
        "id": 3,
        "question": "What is the largest ocean?",
        "answers": [],
      },
      {
        "id": 4,
        "question": "What is the velocity of a sparrow?",
        "answers": [],
      },
    ];

    controller.set('model', { quiz, questions });

    assert.equal(controller.get('questions.firstObject.id'), 1);
    assert.equal(controller.get('questions.lastObject.id'), 3);
    assert.equal(controller.get('questions.length'), 3);
  });
});
