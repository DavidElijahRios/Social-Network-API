const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    postNewUser,
} = require('../../controllers/userController');

//  get all users
router.route('/').get(getUsers).post(postNewUser)

// Need to bring in controller routes to create routes with const variable and {} and require userController.js

module.exports = router;