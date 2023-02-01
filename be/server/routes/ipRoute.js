const router = require('express').Router();

const { postApiGeneratorController, getApiGeneratorController } = require('../controllers/ipController');



router.route('/ip-generator')
    .get( getApiGeneratorController )
    .post( postApiGeneratorController );

module.exports = router;