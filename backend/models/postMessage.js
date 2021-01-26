import mongoose from 'mongoose'

// Creates mongoose schema
// Specifies attributes each post has to have.
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

// turns schema into model
var PostMessage = mongoose.model('PostMessage', postSchema);

// exporting mongoose model from postMessage file
// will use this model to perform CRUD
export default PostMessage;