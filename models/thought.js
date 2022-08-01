const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
           type: String, 
           required: true,
           maxLength: 280,
           minlength: 1, 

        },
        // TODO: Need to figure out how to format timestamp
        createdAt: {
            type: Date,
            timestamps: true, 

        },
        // ? Would I need to reference the user in the users table?
        username: {
             type: String, 
             required: true,
        },
        reactions: {
        // TODO: Add reaction schema
        },
    }
);

// TODO: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.


// module.exports = ;