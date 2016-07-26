exports.payments = function payments(req, res) {
  switch (req.method) {
    case 'GET':
      console.log('GET /payments');
      break;
    case 'POST':
      console.log('POST /payments');
      break;
    case 'DELETE':
      console.log('DELETE /payments');
      break;
    default:
      console.log('Not found');
  }

  res.writeHead(200);
  res.write('OK');
  res.end();
};
