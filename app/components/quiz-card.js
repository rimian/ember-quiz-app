import Component from '@ember/component';

export default Component.extend({
  actions: {
    buttonClick() {
      this.onComplete();
    },
  },
});
