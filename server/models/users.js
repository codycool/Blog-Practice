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
},{timestamps: true})

UserSchema.virtual('password')
    .set(function(value) {
        this._password = value
    })
    .get(function() {
        return this._password
    })

UserSchema.pre('validate',function(next) {
    if(this.password){
        if(this.password.length<6){
            const err = new Boom('Length of password must >= 6',{statusCode: 422,data: 422001})
            next(err)
        }
    }
    next()
})

UserSchema.pre('save', async function(next) {
    if(!this.password) {
        next()
    }
    try{
        this.hashedPassword = await bcrypt.hash(this.password)
    }catch(err) {
        const err = new Boom('Bcrypt error',{statusCode: 500,data: 500001})
        next(err)
    }
})

UserSchema.methods.validatePassword = async (password)=> {
    return await bcrypt.compare(password,this.hashedPassword)
}



export default mongoose.model('User', UserSchema)