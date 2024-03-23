const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user_id: {
        required: true,
        unique: true,
        type: String,
        minlength: 36,
        maxlength: 36
    },
    role_id: {
        required: true,
        type: Number,
        maxlength: 1,
        default: 0
    },
    phone: {
        required: true,
        type: String,
        maxlength: 15
    },
    email: {
        type:String,
        required:true,
        minlength:6,
        unique:true,
    },
    cart: [
        {
            product_id: {
                type: String
            },
            quantity: {
                type: Number
            },
        }
    ],
    membership_point: {
        type: Number
    },
    addresses: [
        {
            address_id: {type: String},
            address: {type: String},
            isDefault: {type: Boolean, default: false}
        }
    ],
    avatar: {
        type: String
    },
    
}, { timestamps: true })

module.exports = mongoose.model('user', userSchema)
