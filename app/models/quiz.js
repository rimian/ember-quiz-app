import DS from 'ember-data';
const { Model } = DS;
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  question_ids: attr(),
});
