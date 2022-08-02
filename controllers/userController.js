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
       User.findById(req.params.id)
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

// update a user by its id


// remove user by its id


}