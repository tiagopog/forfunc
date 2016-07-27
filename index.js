exports.payments = function payments(req, res) {
  switch (req.method) {
    case 'GET':
      console.log('GET /payments');
      res.status(200)
      break;
    case 'POST':
      console.log('POST /payments');
      console.log(req.body)
      res.status(200).send('OK');
      break;
    case 'DELETE':
      console.log('DELETE /payments');
      res.status(200)
      break;
    default:
      res.status(501).send('Not implemented');
  }
};
