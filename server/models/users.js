import mongoose from 'mongoose'
import bcrypt from 'bcryptjs-then'
import Boom from 'boom'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        index: {
            unique: true,
        },
    },
    hashedPassword: {
        type: String,
    },
    nickname: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    isEmailActived: {
        type: Boolean,
        default: false,
    },
    verifyEmailToken: {
        type: String,
    },
},{timestamps: true})

export default mongoose.model('User', UserSchema)