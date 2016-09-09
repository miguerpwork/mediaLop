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

  app.import('bower_components/AdminLTE/bootstrap/css/bootstrap.min.css');
  <!-- Theme style -->
  app.import('bower_components/AdminLTE/dist/css/AdminLTE.min.css');
  <!-- AdminLTE Skins. Choose a skin from the css/skins folder instead of downloading all of them to reduce the load. -->
  app.import('bower_components/AdminLTE/dist/css/skins/_all-skins.min.css');


  <!-- jQuery 2.2.3 -->
  app.import('bower_components/AdminLTE/plugins/jQuery/jquery-2.2.3.min.js');
  <!-- Bootstrap 3.3.6 -->
  app.import('bower_components/AdminLTE/bootstrap/js/bootstrap.min.js');
  <!-- SlimScroll -->
  app.import('bower_components/AdminLTE/slimScroll/jquery.slimscroll.min.js');
  <!-- FastClick -->
  app.import('bower_components/AdminLTE/plugins/fastclick/fastclick.js');
  <!-- AdminLTE App -->
  app.import('bower_components/AdminLTE/dist/js/app.min.js');
  <!-- AdminLTE for demo purposes -->
  // <script src="../../dist/js/demo.js"></script>

  // app.import('bower_components/AdminLTE/dist/css/AdminLTE.min.css');


  return app.toTree();
};
