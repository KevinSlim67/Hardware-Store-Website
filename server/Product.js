const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
})

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1, //minimum value possible is 1
        max: 120, //maximum value possible is 120
        validate: {
            validator: v => v % 2, //makes it so value has to be even
            message: props => `${props.value} is not an even number`
        }
    },
    email: {
        type: String,
        minlength: 10, //minimum 10 characters
        required: true, //makes the email field required
        lowercase: true //makes the email field lowercase
    },
    createdAt: {
        type: Date,
        immutable: true, //prevents you from changing value
        default: () => Date.now() //gets current date
    },
    updatedAt: {
        type: Date,
        default: () => Date.now() //gets current date
    },
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User", //sets this field as a reference to the table "User"
    },
    hobbies: [String], //array of Strings
    address: addressSchema
});

module.exports = mongoose.model("User", userSchema);