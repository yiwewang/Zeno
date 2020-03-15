const router = require('express').Router();
const form = require('./form');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('can you hear me?');
});

router.post('/form', form.create)

module.exports = router;