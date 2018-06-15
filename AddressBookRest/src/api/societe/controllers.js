const Societe = require('./model');

/**
 * Controller Societe List
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
exports.list = async (req, res, next) => {
  const societes = await Societe.find().limit(100);
  res.json(societes);
};

/**
 * Controller Societe Show
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
exports.show = async (req, res, next) => {
  const societe = await Societe.findById(req.params.id);
  res.json(societe);
};


/**
 * Controller Societe Create
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
exports.create = async (req, res, next) => {
  const societe = await Societe.create(req.body);
  res.statusCode = 201;
  res.json(societe);
};

/**
 * Controller Societe Remove
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
exports.remove = async (req, res, next) => {
  const societe = await Societe.findByIdAndRemove(req.params.id)
  res.json(societe);
};

/**
 * Controller Societe Update
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
exports.update = async (req, res, next) => {
  const societe = await Societe.findByIdAndUpdate(req.params.id, req.body);
  res.json(societe);
};
