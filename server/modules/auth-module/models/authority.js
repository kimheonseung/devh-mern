import mongoose from "mongoose";
import autoIdSetter from "../../mongoose/auto-id-setter.js";

const authoritySchema = mongoose.Schema({
    id: Number,
    name: {
        type: String,
        unique: true,
        required: true,
        validate: [
            function(name) {
                return name.length <= 30;
            },
            'Name should be shorter.'
        ]
    },
    description: {
        type: String,
        default: ''
    }
}, { collection: 'authority' });

autoIdSetter(authoritySchema, mongoose, 'authority', 'id');
const authority = mongoose.model('authority', authoritySchema);
export default authority;