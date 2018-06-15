const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controllers');

const router = express.Router();

router.get('/',
  ctrl.list,
);

router.post('/',
  bodyParser.json(),
  ctrl.create,
);

router.get('/:id',
  ctrl.show,
);

router.delete('/:id',
  ctrl.remove,
);

router.patch('/:id',
  bodyParser.json(),
  ctrl.update,
);

module.exports = router;
