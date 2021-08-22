import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create Schema for Users
const ConversationSchema = new Schema({
    recipients: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    lastMessage: {
        type: String,
    },
    date: {
        type: String,
        default: Date.now,
    },
});

const Conversation = mongoose.model(
    'conversations',
    ConversationSchema
);

export default Conversation;