const Contact = require('./model');

/**
 * Controller Contact List
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
exports.list = async (req, res, next) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

/**
 * Controller Contact Show
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
exports.show = async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);
  res.json(contact);
};


/**
 * Controller Contact Create
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
exports.create = async (req, res, next) => {
  const contact = await Contact.create(req.body);
  res.statusCode = 201;
  res.json(contact);
};
