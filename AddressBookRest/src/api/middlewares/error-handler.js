/**
 * Error Handler Middleware
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
module.exports = (err, req, res, next) => {
  res.statusCode = 500;
  res.json({
    msg: err.message,
  });
}
