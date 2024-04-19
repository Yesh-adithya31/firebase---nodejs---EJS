var express = require('express');
const { indexView } = require('../controllers/viewController');
var router = express.Router();

/* GET home page. */
router.route('/').get(indexView);

module.exports = router;
