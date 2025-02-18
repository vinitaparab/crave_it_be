const mongoose=require('mongoose');

//Define the Events schema
const EventSchema = new mongoose.Schema({
    image:String,
    startedAt:String,
    endsAt:String,
    name:String,
    restaurant:{
        type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
    },
    location:String,
  
});

//Define and export the Event model 
const Events=mongoose.model('Events',EventSchema);
module.exports=Events;