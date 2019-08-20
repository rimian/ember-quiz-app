import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | quiz-card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a button', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<QuizCard></QuizCard>`);
    assert.dom('button').exists();
  });

  test('it calls the submit action', async function(assert) {
    assert.expect(1);

    this.set('myAction', () => assert.ok(true));

    await render(hbs`<QuizCard @onComplete={{action myAction}}></QuizCard>`);
    assert.dom('button').exists();
  });
});
