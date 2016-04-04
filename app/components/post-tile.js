import Ember from 'ember';

export default Ember.Component.extend({
  titleAuthor: Ember.computed('post.title', 'post.author', function(){
    return this.get('post.title') + ', by ' + this.get('post.author');
  }),
});
