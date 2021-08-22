import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Create Schema for Users
const MessageSchema = new Schema({
    conversation: {
        type: Schema.Types.ObjectId,
        ref: 'Conversation',
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    body: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: Date.now,
    },
});

const  Message = mongoose.model('messages', MessageSchema);

export default Message