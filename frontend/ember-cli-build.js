/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // <!-- Bootstrap 3.3.6 -->
  app.import('bower_components/AdminLTE/bootstrap/css/bootstrap.min.css');
  app.import('bower_components/AdminLTE/bootstrap/css/bootstrap.min.css.map');
  // <!-- Theme style -->
  app.import('bower_components/AdminLTE/dist/css/AdminLTE.min.css');
  app.import('bower_components/AdminLTE/dist/css/skins/_all-skins.min.css');

  app.import('bower_components/AdminLTE/bootstrap/js/bootstrap.min.js');
  // <!-- AdminLTE App -->
  app.import('bower_components/AdminLTE/dist/js/app.min.js');


  return app.toTree();
};
