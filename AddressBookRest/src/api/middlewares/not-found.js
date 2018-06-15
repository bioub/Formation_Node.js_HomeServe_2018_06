/**
 * Not Found Middleware
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
module.exports = (req, res) => {
  res.statusCode = 404;
  res.json({
    msg: req.notFoundReason || 'Not Found',
  });
}
