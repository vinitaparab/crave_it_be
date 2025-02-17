const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
  name: String,
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
  },
   restaurant:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
    totalAmount:Number,
    orderStatus:String,
    createdAt:{
        type:Date,
        default:true,
    },
    deliveryAddress:{
        type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
    totalItem:Number,
    totalPrice:Number,
});

  //Define and export the Order model
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
