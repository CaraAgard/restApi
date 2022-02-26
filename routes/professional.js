const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

router.get('/professional', professionalController.getProfessional);

//Post /feed/posts
// router.post('/posts', feedController.createPost);

module.exports = router;