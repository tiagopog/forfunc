exports.payments = function payments (req, res) {
  var name;

  switch (req.get('content-type')) {
    // '{"name":"John"}'
    case 'application/json':
      name = req.body.name;
      break;

    // 'John', stored in a Buffer
    case 'application/octet-stream':
      name = req.body.toString(); // Convert buffer to a string
      break;

    // 'John'
    case 'text/plain':
      name = req.body;
      break;

    // 'name=John'
    case 'application/x-www-form-urlencoded':
      name = req.body.name;
      break;
  }

  res.status(200).send('Hello ' + (name || 'World') + '!');
};
