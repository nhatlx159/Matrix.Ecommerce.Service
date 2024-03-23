const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      required: true,
      unique: true,
      type: String,
      minlength: 36,
      maxlength: 36,
    },
    phone: {
      required: true,
      type: String,
      maxlength: 15,
    },
    email: {
      type: String,
      required: true,
      minlength: 6,
      unique: true,
    },
    orderItems: [
      {
        product_id: {
          type: String,
        },
        quantity: {
          type: Number,
        },
        price: {
          type: Number,
        },
      },
    ],
    addresses: {
      address_id: { type: String },
      address: { type: String },
      isDefault: { type: Boolean, default: false },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
