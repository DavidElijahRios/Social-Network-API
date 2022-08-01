const { Schema, model } = require('mongoose');

// Function to validate a users email
const validateEmail = (email) => {
     const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
     return regex.test(email);
};

const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true,


      },
      email: {
        type: String,
        required: true, 
        unique: true,
        validate: [validateEmail, "please fill a valid email address" ],
        match: [ /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "please fill a valid email address" ],
      },
      thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought',
        },
      ],
      friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
      ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// TODO: need to finish virtual
// ? Do I need to return this.friend.length to get number of friends? or will that return list of friends?
userSchema.virtual('friendCount')
// Getter
.get(function () {
    return `${this.friends}`;
})
.set(function (v) {
    this.set({ friends });
})


const User = model('user', userSchema);

module.exports = User;
