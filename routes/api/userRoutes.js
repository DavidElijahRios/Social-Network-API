const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    postNewUser,
    updateUser,
    removeUser,
    addNewFriend,
    removeFriend,
} = require('../../controllers/userController');

//  GET all users & POST new user
router.route('/').get(getUsers).post(postNewUser)

// GET, UPDATE, & DELETE single user by id
router.route('/:userId').get(getSingleUser).put(updateUser).delete(removeUser);

// POST & DELETE a new friend to user's friend list
router.route('/:userId/friends/:friendId').put(addNewFriend).delete(removeFriend);



module.exports = router;