const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    newThought,
    updateThought,
    removeThought,
} = require('../../controllers/thoughtController');

// Need to bring in controller routes to create routes with const variable and {} and require thoughtController.js

module.exports = router;