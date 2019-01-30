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
    viewCount:{
        type: Number,
        default: 0,
    },
    isPublish: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true})


export default mongoose.model('Article',ArticleShema)