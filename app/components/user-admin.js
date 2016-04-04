import Ember from 'ember';

export default Ember.Component.extend({
  userTrue: false,
  actions: {
    showSubmitButton() {
      this.set('userTrue', true);
    },
    save3(params){
      this.sendAction('save4', params);
    }
  }

});
