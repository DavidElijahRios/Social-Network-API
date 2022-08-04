// ?Ask why to bring this in and where it comes from exactly?
const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    
// Get all users
async getUsers(req, res) {
    try {
        const getUsers = await User.find();
        res.status(200).json(getUsers);
      
    } catch (err) {
      res.status(500).json(err);
    }
},

// Get a single user by it's id & populated thought and friend data
getSingleUser(req, res) {
       User.findById(req.params.userId)
       .then((user) => {
        if (!user) {
            res.status(400).json({ message: "No user found with that Id"})
        }
           res.status(200).json(user);
       })
},

// Post a new user
async postNewUser(req, res) {
    try {
        const postNewUser = await User.create(req.body);
        res.status(200).json(postNewUser);

    } catch (err) {
       res.status(500).json(err);
    }
},

// update a user 
async updateUser(req, res) {
    try {
         const updateUser = await User.findByIdAndUpdate({
            _id: req.params.userId
        },
        { 
            $set: req.body, 
        },
        {
            runValidators: true,
            new: true,
        }

        );
         res.status(200).json(updateUser);

    } catch (err) {
        res.status(500).json(err)
    }
},


// remove user by its id
async removeUser(req, res) {
    try {
        const removeUser = await User.findByIdAndDelete({
            _id: req.params.userId
        });
        res.status(200).json(removeUser)
    } catch (err) {
        res.status(500).json(err)
    }
},


// /api/users/:userId/friends/:friendId
// add a new friend to a user's friend list
async addNewFriend(req, res) {
    try{
        const addNewFriend = await User.findByIdAndUpdate({
            _id: req.params.userId
        },
        { $addToSet: { friends: req.params.friendId} },
        {
            new: true,
        });
        res.status(200).json(addNewFriend);
    } catch (err) {
        res.status(500).json(err)
    }
},

// remove a friend from a user's friend list (update not delete)
async removeFriend(req, res) {
    try {
        const removeFriend = await User.findByIdAndUpdate({
            _id: req.params.userId
        },
        { $pull: { friends: req.params.friendId} },
        {
            new: true,
        });
        res.status(200).json(removeFriend);
        
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
},

}