import Ember from 'ember';
import * as faker from 'faker';

export default Ember.Controller.extend({

  productName() {
    return faker.commerce.productName;
  }

});
