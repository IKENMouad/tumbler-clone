const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['video', 'meme', 'quote', 'gif'],
    },
    title: {
        type: String,
        maxLength: 40
    },
    description: {
        type: String,
        maxLength: 100
    },
    tags: [{
        type: mongoose.Types.ObjectId,
        ref: 'Tag'
    }],
    hash: {
        type: mongoose.Types.ObjectId, 
        ref:'Hash'
      },
    file: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);