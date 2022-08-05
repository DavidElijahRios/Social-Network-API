const { User, Thought } = require('../models');
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
        const getSingleThought = await Thought.findById(req.params.thoughtId);
        res.status(200).json(getSingleThought);
    } catch (err) {
        res.status(500).json(err)
    }
},

async newThought(req, res) {
    try {
       const newThought = await Thought.create(req.body);
       const updateUserThought = await User.findByIdAndUpdate({
        _id: req.body.userId
       },
       { $addToSet: { thoughts: newThought._id} },
       {
         new: true,
       });
       res.status(200).json(newThought);
       console.log(newThought)
    } catch (err) {
        res.status(500).json(err)
    }
},

    // update a thought by it's id
async updateThought(req, res) {
    try {
       const updateThought = await Thought.findByIdAndUpdate({
        _id: req.params.thoughtId
       },
       {
          $set: req.body,
       },
       {
         runValidators: true,
         new: true,
       }
       );
       res.status(200).json(updateThought);
    } catch (err) {
        res.status(500).json(err)
    }
},

    // remove a thought by its id
async removeThought(req, res) {
    try {
        const removeThought = await Thought.findByIdAndDelete({ 
            _id: req.params.thoughtId
        });
        res.status(200).json(removeThought);
    } catch (err) {
        res.status(500).json(err)
    }
},

    
    // api/thoughts/:thoughtId/reactions
    async addNewReaction(req, res) {
        try {
            const addNewReaction = await Thought.findOneAndUpdate({
                _id: req.params.thoughtId
            },
            { $addToSet: { reactions: req.body } },
            {
                new: true
            });
            res.status(200).json(addNewReaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },

  async deleteReaction(req, res) {
    try {
         const deleteReaction = await Thought.findByIdAndUpdate({
            _id: req.params.thoughtId
         },
         { $pull: { reactions: req.body }},
         {
            new: true,
         });
         console.log(deleteReaction)
         res.status(200).json(deleteReaction)
    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
  }

}