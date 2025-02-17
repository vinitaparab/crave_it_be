const mongoose = require('mongoose');


//Define the category schema
const FoodSchema = new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
 
    foodCategory:{
        type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    images:[String],
    available:Boolean,
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Restaurant',
    },
    isVegetarian:Boolean,
    isSeasonal:Boolean,
    ingredients:[{
        type:mongoose.Schema.Types.Object,
        ref:'IngredientsItem',
    }],
    creationDate:{
        type:Date,
        default:Date.now,
    },

});
    

//Define and export the Category model 
const Food = mongoose.model('Food',FoodSchema);
module.exports=Food;