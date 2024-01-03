import { Schema, models, model } from "mongoose";


const UserSchema = new Schema({
    clerkId: {
        type: String,
        required: [true, 'clerkid is required'],
        unique: [true, 'clerkId should be unique']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'email should be unique']
    },
    username: {
        type: String,
        required: [true, 'username should be unique'],
        unique: [true, "username should be unique"]
    },
    firstName: {
        type: String,
        required: [true, 'firstName should be unique'],
    },
    lastName: {
        type: String,
        required: [true, 'lastName should be unique'],
    },
    photo: {
        type: String,
        required: [true, 'photo should be unique'],
    },

}, { timestamps: true })

const User = models.User || model('User', UserSchema);

export default User

