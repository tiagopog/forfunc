exports.run = function run(app) {
  // Define globals
  global.App = {};
  global._ = require('lodash');

  // Get functions
  initFunctions();

  // Draw routes
  routes = require('./routes');
  routes.draw(app);
};

var initFunctions = function () {
  var path = '../functions/'

  App.functions = {
    Payers: 'payers',
    Payments: 'payments',
  };

  // Require the main file for each function
  _.forOwn(App.functions, function(value, key) {
    global[key + 'Function'] = require(path + value + '/function');
  });
};
