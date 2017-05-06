/* eslint-env node */
'use strict';
var path = require('path');

module.exports = {
  name: 'faker',

  options: {
    nodeAssets: {
      'faker': function() {
        return {
          enabled: this.app.env !== 'production' || this.addonConfig.enabled,
          import: ['index.js']
        }
      }
    }
  },


  included() {
    let app;

    // Source: https://github.com/samselikoff/ember-cli-mirage/blob/v0.3.1/index.js#L23-L39
    // If the addon has the _findHost() method (in ember-cli >= 2.7.0), we'll just
    // use that.
    if (typeof this._findHost === 'function') {
      app = this._findHost();
    } else {
      // Otherwise, we'll use this implementation borrowed from the _findHost()
      // method in ember-cli.
      let current = this;
      do {
        app = current.app || app;
      } while (current.parent.parent && (current = current.parent));
    }

    this.app = app;
    this.addonConfig = this.app.project.config(app.env)['ember-faker'] || {};

    // Call super after initializing config so we can use _shouldIncludeFiles for the node assets
    this._super.included.apply(this, arguments);
  },


  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  }
};
