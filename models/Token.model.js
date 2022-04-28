const { model, Schema } = require('mongoose');
const UserModel = require('./User.model');

const TokenScheme = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
    },
    refreshToken: {
        type: String,
        required: true,
    },
});

module.exports = model('token', TokenScheme);
