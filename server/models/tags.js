import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TagShema = new Schema({
    tag: {
        type: String,
        require: true,
    },
},{timestamps: true})

export default mongoose.model('Tag',TagShema)