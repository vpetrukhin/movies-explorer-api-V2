const { model, Schema } = require('mongoose');

const UserScheme = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    isActivated: {
        type: Boolean,
        required: true,
    },
    activationLink: String
});

module.exports = model('user', UserScheme);
