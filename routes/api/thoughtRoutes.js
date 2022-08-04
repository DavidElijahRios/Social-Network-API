const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    newThought,
    updateThought,
    removeThought,
    addNewReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// GET all thoughts
router.route('/').get(getThoughts).post(newThought);

// POST a new Thought
// router.route('/').post(newThought);

// GET, UPDATE, POST & DELETE single thought by id
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(removeThought);

// POST & DELETE a reaction
router.route('/:thoughtId/reactions').post(addNewReaction).delete(deleteReaction);


module.exports = router;