exports.draw = function draw(app) {

  // Payers
  app.get('/payers', entryPointFor(PayersFunction));
  app.post('/payers', entryPointFor(PayersFunction));

  // Payments
  app.get('/payments', entryPointFor(PaymentsFunction));
  app.post('/payments', entryPointFor(PaymentsFunction))
};

// Cloud Function's entry point
var entryPointFor = function(module) {
  return function(req, res) {
    module.dispatcher(req, res);
  };
};
