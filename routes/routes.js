const express = require('express');

const router = express.Router()
const { allVideo } = require ('../controllers/VideoControllers');

router.get('/',allVideo)

module.exports = router;