const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const formatDate = require('../utils/helper');

const thoughtSchema = new Schema(
    {
        thoughtText: {
           type: String, 
           required: true,
           maxLength: 280,
           minLength: 1, 

        },
        createdAt: {
            type: Date, 
            default: Date.now,
            //   get: (date) => formatDate(date)
        },
        username: {
             type: String, 
             required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


thoughtSchema.virtual('reactionCount')

.get(function () {
    return this.reactions.length
})



// Converting schema into model to be used
const Thought = model('thought', thoughtSchema);

module.exports = Thought;