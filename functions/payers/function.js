/**
 * Handle requests related to payer entities.
 *
 * @param {IncomingMessage} req Contain data about the request.
 * @param {} res Contain data about the resonse.
 * @return {}
 * @public
 */
exports.dispatcher = function dispatcher(req, res) {
  switch (req.method) {
    case 'GET':
      console.log('GET /payments');
      res.status(200)
      break;
    case 'POST':
      console.log('POST /payments');
      break;
    case 'PUT':
      console.log('PUT /payments');
      break;
    default:
      res.status(501).send('Not implemented');
  }
};
