const Contact = require('./model');

/**
 * Controller Contact List
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
exports.list = async (req, res, next) => {
  const contacts = await Contact.find()//.limit(100).populate('societe');
  res.json(contacts);
};

/**
 * Controller Contact Show
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
exports.show = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id).populate('societe');

    if (!contact) {
      req.notFoundReason = 'Contact not found';
      return next();
    }

    res.json(contact);
  }
  catch (err) {
    next(err);
  }
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

/**
 * Controller Contact Remove
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
exports.remove = async (req, res, next) => {
  const contact = await Contact.findByIdAndRemove(req.params.id)
  res.json(contact);
};

/**
 * Controller Contact Update
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {function} next
 */
exports.update = async (req, res, next) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
  res.json(contact);
};
