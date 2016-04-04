import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['votes:asc'],
  sortedPosts: Ember.computed.sort('posts', 'sortBy'),
});
