const mongoose=require('mongoose');


const CartSchema = new mongoose.Schema({
    customer:{
        type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    items:[{
        type: mongoose.Schema.Types.ObjectId,
      ref: 'CartItem',
    }],
    total:Number,
});

//Define and export the Cart model 
const Cart=mongoose.model('Cart',CartSchema);
module.exports=Cart;