import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ArticleShema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    }],
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag',
    }],
    commentCount: {
        type: Number,
        default: 0,
    },
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
}, {timestamps: true})


export default mongoose.model('Article',ArticleShema)