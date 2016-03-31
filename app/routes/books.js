import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('book');
  },
  actions: {
    openCheckoutModal(book) {
      this.controllerFor('application').set('showingModal', true);
      return this.render('modal', {
        outlet: 'modal',
        into: 'application',
        model: book,
        controller: 'application'
      });
    },

    closeCheckoutModal() {
      this.controllerFor('application').set('showingModal', true);
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
