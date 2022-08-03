const { User, Thought } = require('../models');
// ?does object id go here? because of the assignment?
const { ObjectId } = require('mongoose').Types;

module.exports = {

    // get all thoughts
async getThoughts(req, res) {
    try {
      const getThoughts = await Thought.find();
      res.status(200).json(getThoughts); 
    } catch (err) {
        res.status(500).json(err)
    }
},

    // get a single thought by its id
async getSingleThought(req, res) {
    try {
        const getSingleThought = await Thought.findById(req.params.id);
        res.status(200).json(getSingleThought);
    } catch (err) {
        res.status(500).json(err)
    }
},

    // ?post to create a new thought (don't forget to ?push? the created thought's id to the associated users thoughts array field)
async newThought(req, res) {
    try {
       const newThought = await Thought.create(req.body);
       res.status(200).json(newThought);
    } catch (err) {
        res.status(500).json(err)
    }
},

    // update a thought by it's id
async updateThought(req, res) {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
},

    // remove a thought by its id
async removeThought(req, res) {
    try {
        const removeThought = await Thought.findByIdAndDelete({ 
            _id: req.params.id
        });
        res.status(200).json("thought has been removed", removeThought);
    } catch (err) {
        res.status(500).json(err)
    }
},

    
    // api/thoughts/:thoughtId/reactions
    // ?create a reaction stored in a single thoughts reactions array field


    // ?Delete to pull and remove a reaction by the reactions reaction Id value



}