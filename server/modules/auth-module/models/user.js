import mongoose from "mongoose";
import autoIdSetter from "../../mongoose/auto-id-setter.js";

const userSchema = mongoose.Schema({
    id: Number,
    username: {
        type: String,
        unique: true,
        required: true,
        validate: [
            function(username) {
                return username.length <= 20;
            },
            'Username should be shorter.'
        ]
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        validate: [
            function(name) {
                return name.length <= 50;
            },
            'Name should be shorter.'
        ]
    },
    nickname: {
        type: String,
        unique: true,
        required: true,
        validate: [
            function(nickname) {
                return nickname.length <= 50;
            },
            'Nickname should be shorter.'
        ]
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: true,
        validate: [
            function(phone) {
                return phone.length <= 50;
            },
            'Phone should be shorter.'
        ]
    },
    accessIp: {
        type: String,
        default: '*.*.*.*',
        validate: [
            function(accessIp) {
                return accessIp.length <= 15;
            },
            'Access IP should be shorter.'
        ]
    },
    loginFailIp: {
        type: String,
        default: '',
        validate: [
            function(loginFailIp) {
                return loginFailIp.length <= 15;
            },
            'Login fail IP should be shorter.'
        ]
    },
    loginFailCount: {
        type: Number,
        default: 0,
        validate: [
            function(loginFailCount) {
                return loginFailCount <= 5;
            },
            'Login fail count over.'
        ]
    },
    statusMessage: {
        type: String,
        default: '',
        validate: [
            function(statusMessage) {
                return statusMessage.length <= 255;
            },
            'Status message should be shorter.'
        ]
    },
    backgroundImage: {
        type: String,
        default: '',
        validate: [
            function(backgroundImage) {
                return backgroundImage.length <= 255;
            },
            'Background image should be shorter.'
        ]
    },
    profileImage: {
        type: String,
        default: '',
        validate: [
            function(profileImage) {
                return profileImage.length <= 255;
            },
            'Profile image should be shorter.'
        ]
    },
    loginAt: {
        type: Date,
        default: Date.now
    },
    loginFailedAt: {
        type: Date,
        default: null
    },
    passwordChangedAt: {
        type: Date,
        default: Date.now
    },
    authorities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'authority'
    }],
    departments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'department'
    }]
}, { collection: 'user' });

autoIdSetter(userSchema, mongoose, 'user', 'id');
const user = mongoose.model('user', userSchema);
export default user;