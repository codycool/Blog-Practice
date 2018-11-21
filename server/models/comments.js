import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CommentSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: 'Article',
    },
    content: {
        type: String,
        require: true,
    },
},{timestamps: true})

export default mongoose.model('Comment',CommentSchema)