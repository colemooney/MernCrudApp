const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    posts: {
        type: Array,
        
    }
});

const User = mongoose.model("UserData", UserSchema);
module.exports = User;