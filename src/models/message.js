const mongoose = require(mongoose)

const Schema = mongoose.Schema

const messageSchema = new Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,

    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    text: {
        type: String,
        require: true
    }

},{timestamps: true})

module.exports = mongoose.model('Message', messageSchema)