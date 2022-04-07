import mongoose from "mongoose";
import autoIdSetter from "../../mongoose/auto-id-setter.js";

const departmentSchema = mongoose.Schema({
    id: Number,
    name: {
        type: String,
        unique: true,
        required: true,
        validate: [
            function(name) {
                return name.length <= 100;
            },
            'Name should be shorter.'
        ]
    },
    description: {
        type: String,
        default: ''
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
        ref: 'department'
    },
}, { collection: 'department' });

autoIdSetter(departmentSchema, mongoose, 'department', 'id');
const department = mongoose.model('department', departmentSchema);
export default department;